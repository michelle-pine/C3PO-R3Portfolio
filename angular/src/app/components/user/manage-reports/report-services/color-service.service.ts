import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ColorServiceService {
  colors = [
    {
      backgroundColor: "rgba(65,182,230, .6)",
      borderColor: "rgba(65,182,230,1)"
    }, //boston sky
    {
      backgroundColor: "rgba(242,169,0, .6)",
      borderColor: "rgba(242,169,0,  1)"
    }, //boston yellow
    {
      backgroundColor: "rgba(0,115,150, .6)",
      borderColor: "rgba(0,115,150, 1)"
    }, //boston indigo
    {
      backgroundColor: "rgba(246,50,62, .6)",
      borderColor: "rgba(24,50,62, 1)"
    }, //boston red
    {
      backgroundColor: "rgba(115,150,0, .6)",
      borderColor: "rgba(115,150,0, 1)"
    }, //boston green
    { backgroundColor: "rgba(0,48,135, .6)", borderColor: "rgba(0,48,135,1)" }, //boston blue
    {
      backgroundColor: "rgba(110,124,160, .6)",
      borderColor: "rgba(110,124,160,1)"
    }, //boston bay
    {
      backgroundColor: "rgba(198,87,154, .6)",
      borderColor: "rgba(198,87,154,1)"
    }, //boston pink
    {
      backgroundColor: "rgba(140,71,153, .6)",
      borderColor: "rgba(140,71,153,1)"
    }, //boston lavender
    { backgroundColor: "rgba(128,34,95, .6)", borderColor: "rgba(128,34,95,1)" } //boston purple
  ];
  public altColors: Array<any> = [
    {
      backgroundColor: [
        "rgba(65,182,230, .6)",
        "rgba(242,169,0, .6)",
        "rgba(0,115,150, .6)",
        "rgba(246,50,62, .6)",
        "rgba(115,150,0, .6)",
        "rgba(0,48,135, .6)",
        "rgba(110,124,160, .6)",
        "rgba(198,87,154, .6)",
        "rgba(140,71,153, .6)",
        "rgba(128,34,95, .6)",
      ],
      borderColor: [
        "rgba(65,182,230, 1)",
        "rgba(242,169,0, 1)",
        "rgba(0,115,150, 1)",
        "rgba(246,50,62, 1)",
        "rgba(115,150,0, 1)",
        "rgba(0,48,135, 1)",
        "rgba(110,124,160, 1)",
        "rgba(198,87,154, 1)",
        "rgba(140,71,153, 1)",
        "rgba(128,34,95, 1)",
      ]
    }
  ];
  constructor() {}
}
