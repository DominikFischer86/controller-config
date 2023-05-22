const variantLeftDirectionControls = `
  .left-direction-controls {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto auto;
    grid-column-gap: 10px;
    grid-row-gap: 0;
    justify-items: center;
    align-items: center;
  }

  > div > div {
    white-space: nowrap;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, .1);
    padding: 4px;
  }

  .ZCWIcon { 
    grid-area: 1 / 1 / 2 / 2; 
    align-self: center; 
    border: 0;
  }
  .left-z { 
    grid-area: 1 / 2 / 2 / 3; 
    align-self: center; 
  }

  .XYIcon { 
    grid-area: 2 / 1 / 3 / 2; 
    align-self: center; 
    border: 0;
  }
  .left-x-y-key-horizontal { 
    grid-area: 2 / 2 / 3 / 3; 
    align-self: center; 
  }
  .left-x-y-key-vertical { 
    grid-area: 3 / 1 / 4 / 3; 
    align-self: start; 
  }
`;

const variantRightDirectionControls = `
  .right-direction-controls {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto auto;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
    justify-items: center;
    align-items: center;
  }

  > div > div {
    white-space: nowrap;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, .1);
    padding: 4px;
  }

  .ZCCWIcon { 
    grid-area: 1 / 2 / 2 / 3; 
    align-self: end; 
    text-align: right;
    border: 0;
  }
  .right-z { 
    grid-area: 1 / 1 / 2 / 2; 
    align-self: center; 
    text-align: right; 
  }

  .XYIcon { 
    grid-area: 2 / 2 / 3 / 3; 
    align-self: end; 
    text-align: right;
    border: 0;
  }
  .right-x-y-key-horizontal { 
    grid-area: 2 / 1 / 3 / 2; 
    align-self: center; 
    text-align: right; 
  }
  .right-x-y-key-vertical { 
    grid-area: 3 / 1 / 4 / 3; 
    align-self: start; 
    text-align: right;
    padding-right: 10px;
  }
`;

const variantLeftAC134 = (type: "a" | "c", number: "1" | "3" | "4") => `
  .left-${type}${number}-controls {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    grid-column-gap: 12px;
    grid-row-gap: 5px;
    justify-items: center;
    align-items: center;
  }

  > div > div {
    white-space: nowrap;
    width: 100%;
    border: 1px solid rgba(255, 255,255,.1);
    padding: 4px;
  }

  .left-${type}${number}-up { grid-area: 1 / 1 / 2 / 4; align-self: center; text-align: center; }
  .left-${type}${number}-right { grid-area: 2 / 3 / 3 / 4; align-self: center; text-align: left; }

  .A1Icon, .A3Icon, .A4Icon, .C1Icon { grid-area: 2 / 2 / 3 / 3; align-self: end; text-align: center; border: 0; }
  .left-${type}${number}-bottom { grid-area: 3 / 2 / 4 / 4; align-self: start; }
  .left-${type}${number}-left { grid-area: 2 / 1 / 3 / 2; align-self: center; text-align: right; }
  .left-${type}${number}-extra {
    3 / 1 / 4 / 2; 
    align-self: center;
    position: relative;
    text-align: center;

    &:after {
      content: "";
      display: block;
      position: absolute;
      right: -24px;
      top: -15px;
      width: 50px;
      height: 1px;
      background: #fff;
      transform: rotate(-45deg);
    }
  }
`;

const variantRightAC134 = (type: "a" | "c", number: "1" | "3" | "4") => `
  .right-${type}${number}-controls {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    grid-column-gap: 12px;
    grid-row-gap: 5px;
    justify-items: center;
    align-items: center;
  }

  > div > div {
    white-space: nowrap;
    width: 100%;
    border: 1px solid rgba(255, 255,255,.1);
    padding: 4px;
  }

  .right-${type}${number}-up { grid-area: 1 / 1 / 2 / 4; align-self: center; text-align: center; }
  .right-${type}${number}-right { grid-area: 2 / 3 / 3 / 4; align-self: center; text-align: left; }

  .A1Icon, .A3Icon, .A4Icon, .C1Icon { grid-area: 2 / 2 / 3 / 3; align-self: end; text-align: center; border: 0; }
  .right-${type}${number}-bottom { grid-area: 3 / 1 / 4 / 3; align-self: start; text-align: right;}
  .right-${type}${number}-left { grid-area: 2 / 1 / 3 / 2; align-self: center; text-align: right; }
  .right-${type}${number}-extra {
    3 / 3 / 4 / 4; 
    align-self: center;
    position: relative;
    text-align: center;

    &:after {
      content: "";
      display: block;
      position: absolute;
      left: -24px;
      top: -15px;
      width: 50px;
      height: 1px;
      background: #fff;
      transform: rotate(45deg);
    }
  }
`;

const variantA2B1D1 = `
  .left-a2-controls, 
  .right-a2-controls,
  .left-b1-controls,
  .right-b1-controls,
  .right-d1-controls, 
  .left-d1-controls {
    display: flex;
    flex-direction: column-reverse;
    gap: 2px;
    justify-items: center;
    align-items: center;

    > div {
      text-align: center;
      border: 1px solid rgba(255,255,255,.1);
      padding: 5px;
    }

    .D1Icon, .A2Icon, .B1Icon {
      border: 0;
    }
  }
  
`;

const variantF = `
  .left-f-controls, .right-f-controls {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 10px;
    grid-row-gap: 0px;
   

    > div {
      text-align: center;
      align-self: start;
      white-space: nowrap;
      padding: 2px;
    }

    .F2Icon {grid-area: 1 / 1 / 2 / 2; }
    .left-f2-press {grid-area: 2 / 1 / 3 / 2;}

    .F1Icon {grid-area: 1 / 2 / 2 / 3;}
    .left-f1-press {grid-area: 2 / 2 / 3 / 3;}

    .F3Icon {grid-area: 1 / 3 / 2 / 4; }
    .left-f3-press {grid-area: 2 / 3 / 3 / 4;}
  }
`;

const variantET = `
  .left-e-t-controls, .right-e-t-controls {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 10px;
    grid-row-gap: 0px;

    div {
      text-align: center;
      align-self: start;
      white-space: nowrap;
    }

    .left-e1-upper-dial { grid-area: 1 / 1 / 2 / 2; }
    .E1Icon { grid-area: 2 / 2 / 3 / 3; }
    .left-e1-lower-dial { grid-area: 3 / 1 / 4 / 2; }

    .left-t1-upper-dial { grid-area: 1 / 2 / 2 / 3; }
    .T1Icon { grid-area: 2 / 1 / 3 / 2; }
    .left-t1-lower-dial { grid-area: 3 / 2 / 4 / 3; }

    .left-e2-upper-dial { grid-area: 1 / 3 / 2 / 4; }
    .E2Icon { grid-area: 2 / 3 / 3 / 4; }
    .left-e2-lower-dial { grid-area: 3 / 3 / 4 / 4; }
  }
`;

const variantRedTrigger = `
  .left-red-trigger-controls, .right-red-trigger-controls {
    display: grid;
    grid-template-columns: auto, 1fr;
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 10px;
    grid-row-gap: 5px;
  }

  .TriggerIcon { 
    grid-area: 1 / 1 / 3 / 2; 
    align-self: center; 
    text-align: center; 
    transform: scaleX(-1); 
  }
  .left-red-trigger-press-stage-one, 
  .right-red-trigger-press-stage-one {
    grid-area: 1 / 2 / 2 / 3; 
    align-self: end;
    position: relative;
    padding-left: 34px;

    &:before {
      content: "Stage One";
      white-space: normal;
      max-width: 18px;
      font-size: 8px;
      display: block;
      position: absolute;
      line-height: .9;
      left: 0;
      top: calc(50% - 6px);
    }
  }
  .left-red-trigger-press-stage-two,
  .right-red-trigger-press-stage-two {
    grid-area: 2 / 2 / 3 / 3; 
    align-self: start;
    position: relative;
    padding-left: 34px;

    &:before {
      content: "Stage Two";
      white-space: normal;
      max-width: 18px;
      font-size: 8px;
      display: block;
      position: absolute;
      line-height: .9;
      left: 0;
      top: 2px;
    }
  }
`;

const variantBlackTrigger = `
  .left-black-trigger-controls, .right-black-trigger-controls {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(3, auto);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }

  .TriggerIcon { 
    grid-area: 1 / 1 / 2 / 3;
    align-self: center; 
    text-align: center;
  }

  .right-black-trigger-controls .TriggerIcon {
    transform: scaleX(-1);
  }

  .UpDownIcon {
    grid-area: 2 / 1 / 4 / 2;
    align-self: center; 
    text-align: center; 
  }
  .left-black-trigger-press-up, 
  .right-black-trigger-press-up {
    grid-area: 2 / 2 / 3 / 3; 
    align-self: end;

  }
  .left-black-trigger-press-down,
  .right-black-trigger-press-down {
    grid-area: 3 / 2 / 4 / 3;
    align-self: start;
  }
`;

export const getCustomBlockStyles = (id: string): string | null => {
    // Left Side
    if (id === "left-direction-controls-start")
        return variantLeftDirectionControls;
    if (id === "left-a1-controls-start") return variantLeftAC134("a", "1");
    if (id === "left-a2-controls-start") return variantA2B1D1;
    if (id === "left-a3-controls-start") return variantLeftAC134("a", "3");
    if (id === "left-a4-controls-start") return variantLeftAC134("a", "4");
    if (id === "left-b1-controls-start") return variantA2B1D1;
    if (id === "left-c1-controls-start") return variantLeftAC134("c", "1");
    if (id === "left-d1-controls-start") return variantA2B1D1;
    if (id === "left-f-controls-start") return variantF;
    if (id === "left-e-t-controls-start") return variantET;
    if (id === "left-red-trigger-controls-start") return variantRedTrigger;
    if (id === "left-black-trigger-controls-start") return variantBlackTrigger;

    // Right Side
    if (id === "right-direction-controls-start")
        return variantRightDirectionControls;
    if (id === "right-a1-controls-start") return variantRightAC134("a", "1");
    if (id === "right-a2-controls-start") return variantA2B1D1;
    if (id === "right-a3-controls-start") return variantRightAC134("a", "3");
    if (id === "right-a4-controls-start") return variantRightAC134("a", "4");
    if (id === "right-b1-controls-start") return variantA2B1D1;
    if (id === "right-c1-controls-start") return variantRightAC134("c", "1");
    if (id === "right-d1-controls-start") return variantA2B1D1;
    if (id === "right-f-controls-start") return variantF;
    if (id === "right-e-t-controls-start") return variantET;
    if (id === "right-red-trigger-controls-start") return variantRedTrigger;
    if (id === "right-black-trigger-controls-start") return variantBlackTrigger;
    return null;
};
