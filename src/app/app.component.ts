import { Component,OnInit,ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Tree } from './data-model/tree.model';
import { DialogComponent } from './dialog/dialog.component';
import { SearchService } from './services/search.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  @ViewChild('tree', ) tree;
  public nodeCounter: number = 0;
  public treeNodes: Tree[] = [];
  public selectedNode: Tree;
  id:number;
  public selectedNodeId: number;
  constructor(private readonly searchService: SearchService,
   public dialog: MatDialog)
  {}
  demo:any;
  
  ngOnInit(): void {
    this.searchService.gettree().subscribe((data:any)=>
    {
    this.demo=data.message;
    
    this.setTree(this.demo);
    
    })
    
       
  }
  con
  public setTree(_searchResponses: any[]):void{
		let treeSearchResponses: Tree[] = [];
		_searchResponses.map((searchResponse) => {
				let treeNode:Tree = new Tree();
				treeNode.id = searchResponse.pmd_key;
				treeNode.parentId = searchResponse.pmd_parent_key;
				treeNode.name = searchResponse.pmd_value_description;
				treeNode.isExpanded = true;
				this.nodeCounter++;
				treeSearchResponses.push(treeNode)
		});
	const nest = (items, id = null, link = 'parentId') =>
		  items
			.filter(item => item[link] === id)
			.map(item => ({ ...item, children: nest(items, item.id) }));

		this.treeNodes =  nest(treeSearchResponses);
  }
   public onNodeSelected(node: Tree):void{
    this.selectedNode = node;
    this.selectedNodeId = this.selectedNode.parentId;
    console.log(this.selectedNodeId);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      
    })
  }

}
