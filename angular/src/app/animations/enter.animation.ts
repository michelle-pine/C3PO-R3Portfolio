import {
  query,
  trigger,
  state,
  animate,
  transition,
  style
} from "@angular/animations";

export const enterAnimation = trigger("enterAnimation", [
  transition(":enter", [
    style({  opacity: 0 }),
    animate("0.3s", style({  opacity: 1 }))
  ]),
  transition(":leave", [
    style({  opacity: 1 }),
    animate("0.3s", style({  opacity: 0 }))
  ])
]);
