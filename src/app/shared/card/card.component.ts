import { Component } from '@angular/core';
import {CardModel} from "../DTOs/card.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  cardState: CardModel[] = [
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
    ]
}
