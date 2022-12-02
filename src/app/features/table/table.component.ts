import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {CardModel} from "../../shared/DTOs/card.model";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tableState= new MatTableDataSource<CardModel>( [
    {
      name: "Carpi Tea",
      origin: "Italy",
      description: "Vanilla-coffee flavours.",
      url: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/D2E2521B-2690-44B5-8BD5-0BAD5C76EB37/Derivates/290E3C0B-2A82-4243-8C73-BAA412C4CF80.jpg"
    },
    {
      name: "Tea PowerUp",
      origin: "India",
      description: "Indian Tea sweet and strong flavour of spices.",
      url: "https://www.allrecipes.com/thmb/imB2QC5ocxI0yzmB97ChbjdOGdo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-109190-SmothSweetTea-0163-4x3-1-94a22ca832964199993e93a000b5548b.jpg"
    },
    {
      name: "FinTea",
      origin: "Finland",
      description: "Cinnamon flavour tea.",
      url: "https://www.selecta.com/.imaging/mte/selecta/lg/dam/stories/Tea-blog/Tea-General.jpg/jcr:content/Tea%20General.jpg"
    },
    {
      name: "Tea Sea",
      origin: "Norway",
      description: "Norwegian high level tea, salt water flavour.",
      url: "https://post.healthline.com/wp-content/uploads/2022/01/hot-tea-steaming-steeping-732-549-feature-thumb.jpg"
    },
    {
      name: "Classic Tea",
      origin: "England",
      description: "Classic england tea, brown and... classic!",
      url: "https://www.aiafood.com/sites/default/files/styles/scale_1920/public/articles/tea_party.jpg?itok=qkCghoW2"
    },
    {
      name: "Tea Culpa",
      origin: "Vatican",
      description: "Tea Culpa is a tea without sins.",
      url: "https://cdn.britannica.com/12/180112-138-DBC1C64A/tea-cultivation-brewing.jpg?w=800&h=450&c=crop"
    }
  ])

  editElement : CardModel = {name: "",origin :"", description: "", url: ""}

  displayedColumns: string[] = ["name", "origin", "description", "action"]
  sendTea(teaNameInput: HTMLInputElement,
          teaOriginInput: HTMLInputElement,
          teaDescInput: HTMLInputElement,
          teaUrlInput: HTMLInputElement) {
    let teaInsert : CardModel = {
      name: teaNameInput.value,
      origin: teaOriginInput.value,
      description: teaDescInput.value,
      url: teaUrlInput.value
    }
    if(teaInsert.name.length === 0 || teaInsert.origin.length === 0 || teaInsert.description.length === 0) return;
    let newArray: CardModel[] = this.tableState.data;
    newArray.unshift(teaInsert);
    this.tableState.data = newArray;
    teaNameInput.value = "";
    teaOriginInput.value = "";
    teaDescInput.value = "";
    teaUrlInput.value = "";
    let table = document.getElementById("table");
    table !== null ? table.scrollIntoView({behavior: 'smooth'}) : "";
  }

  StartEditRecord(element: CardModel) : void {
    this.editElement = element;
    let popUp = document.getElementById("pop-up");
    popUp !== null ? popUp.style.display = "flex" : "";
  }
  editRecord(element: CardModel, name: HTMLInputElement, origin: HTMLInputElement, desc: HTMLInputElement, url: HTMLInputElement) : void {
    let index = this.getIndex(element);
    let newArray: CardModel[] = this.tableState.data;
    newArray[index].name= name.value;
    newArray[index].origin= origin.value;
    newArray[index].description= desc.value;
    newArray[index].url= url.value;
    this.tableState.data = newArray;
    let popUp = document.getElementById("pop-up");
    popUp !== null ? popUp.style.display = "none" : "";
  }
  getIndex(el: CardModel) : number {
    return this.tableState.data.indexOf(el);
  }
}
