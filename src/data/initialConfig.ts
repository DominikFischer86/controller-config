import { anchorType } from "react-xarrows/lib/types";
import A1Icon from "../assets/icons/A1Icon.svg";
import A2Icon from "../assets/icons/A2Icon.svg";
import A3Icon from "../assets/icons/A3Icon.svg";
import A4Icon from "../assets/icons/A4Icon.svg";
import B1Icon from "../assets/icons/B1Icon.svg";
import C1Icon from "../assets/icons/C1Icon.svg";
import D1Icon from "../assets/icons/D1Icon.svg";
import E1Icon from "../assets/icons/E1Icon.svg";
import E2Icon from "../assets/icons/E2Icon.svg";
import F1Icon from "../assets/icons/F1Icon.svg";
import F2Icon from "../assets/icons/F2Icon.svg";
import F3Icon from "../assets/icons/F3Icon.svg";
import T1Icon from "../assets/icons/T1Icon.svg";
import TriggerIcon from "../assets/icons/TriggerIcon.svg";
import UpDownIcon from "../assets/icons/UpDownIcon.svg";
import XYIcon from "../assets/icons/XYIcon.svg";
import ZCCWIcon from "../assets/icons/ZCCWIcon.svg";
import ZCWIcon from "../assets/icons/ZCWIcon.svg";

export const modesArray = {
    mining: "M",
    scanning: "SC",
    missile: "MS",
    hold: "H",
    "double tap": "DT",
    turret: "T",
    salvage: "SV",
};

export const colors = {
    orange: "#d47d1e",
    blue: "#388ac4",
    green: "#5d9438",
    purple: "#4c2868",
    red: "#b21e23",
    yellow: "#c5ba20",
    magenta: "#bc09bc",
};

export const modeColors = {
    mining: colors.green,
    scanning: colors.blue,
    missile: colors.purple,
    hold: colors.red,
    "double tap": colors.yellow,
    turret: colors.magenta,
    salvage: colors.orange,
};

export interface InputScheme {
    primaryInput: string;
    secondaryInput?: string;
    tertiaryInput?: string;
}

export interface ModeScheme {
    primaryMode?: string[];
    secondaryMode?: string[];
    tertiaryMode?: string[];
}

export interface ControlScheme {
    id: string;
    label: string;
    inputs: InputScheme;
    modes: ModeScheme;
}

export interface Config {
    id: string;
    title: string;
    boxPositionStart: number[];
    boxPositionEnd: number[] | null;
    startAnchorAttachmentSide: anchorType;
    endAnchorAttachmentSide: anchorType;
    icons?: string[];
    iconWidth?: number;
    controlScheme: ControlScheme[];
    visible: boolean;
}

export interface Configs {
    inputBoxPositions: Config[];
    legend: Legend;
    settings: SettingsTypes;
}

export enum AnchorPosition {
    "left",
    "right",
    "top",
    "bottom",
    "auto",
}

export interface Entries {
    color: string;
    short: string;
    text: string;
}

export interface Legend {
    id: string;
    boxPosition: number[];
    entries: Entries[];
}

export interface SettingsTypes {
    hideEmptyInputs: boolean;
    fontSize: number;
    lineStyle: "grid" | "smooth";
    gridBreak: string;
    curveness: number;
    strokeWidth: number;
    headSize: number;
    color: string;
}

export const initialConfig: Configs = {
    settings: {
        hideEmptyInputs: false,
        fontSize: 16,
        lineStyle: "smooth",
        gridBreak: "50%",
        curveness: 0.8,
        strokeWidth: 2,
        headSize: 3,
        color: colors.green,
    },
    legend: {
        id: "legend",
        boxPosition: [1020,917],
        entries: [
            {
                color: modeColors.mining,
                short: modesArray.mining,
                text: "Mining",
            },
            {
                color: modeColors.scanning,
                short: modesArray.scanning,
                text: "Scanning",
            },
            {
                color: modeColors.missile,
                short: modesArray.missile,
                text: "Missile",
            },
            {
                color: modeColors.hold,
                short: modesArray.hold,
                text: "Hold",
            },
            {
                color: modeColors["double tap"],
                short: modesArray["double tap"],
                text: "Double Tap",
            },
            {
                color: modeColors.turret,
                short: modesArray.turret,
                text: "Turret",
            },
            {
                color: modeColors.salvage,
                short: modesArray.salvage,
                text: "Salvage",
            },
        ],
    },
    inputBoxPositions: [
        // Left Side
        {
            id: "left-direction-controls",
            title: "Direction Controls",
            boxPositionStart: [-200, -240],
            boxPositionEnd: null,
            startAnchorAttachmentSide: "auto",
            endAnchorAttachmentSide: "auto",
            icons: [ZCWIcon, XYIcon],
            iconWidth: 50,
            visible: true,
            controlScheme: [
                {
                    id: "left-z",
                    label: "Z-Stick",
                    inputs: {
                        primaryInput: "Strafe Up/Down",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-x-y-key-horizontal",
                    label: "X/Y-Stick Horizontal",
                    inputs: {
                        primaryInput: "Strafe Left/Right",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-x-y-key-vertical",
                    label: "X/Y-Stick Vertikal",
                    inputs: {
                        primaryInput: "Strafe Forward/Back",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-a1-controls",
            title: "A1-Stick",
            boxPositionStart: [
                -59,
                -271
              ],
              boxPositionEnd: [
                535,
                80
              ],
            startAnchorAttachmentSide: "bottom",
            endAnchorAttachmentSide: "top",
            icons: [A1Icon],
            iconWidth: 40,
            visible: true,
            controlScheme: [
                {
                    id: "left-a1-up",
                    label: "A1-Stick Up",
                    inputs: {
                        primaryInput: "Increase Limiter",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a1-right",
                    label: "A1-Stick Right",
                    inputs: {
                        primaryInput: "Reset SCM",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a1-bottom",
                    label: "A1-Stick Bottom",
                    inputs: {
                        primaryInput: "Decrease Limiter",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a1-left",
                    label: "A1-Stick Left",
                    inputs: {
                        primaryInput: "Cruise Control",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a1-extra",
                    label: "A1 Button Press",
                    inputs: {
                        primaryInput: "*Mode Switch",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-a2-controls",
            title: "A2-Button",
            boxPositionStart: [
                275,
                -261
              ],
              boxPositionEnd: [
                540,
                120
              ],
            startAnchorAttachmentSide: "bottom",
            endAnchorAttachmentSide: "auto",
            icons: [A2Icon],
            iconWidth: 34,
            visible: true,
            controlScheme: [
                {
                    id: "left-a2-press",
                    label: "A2 Button Press",
                    inputs: {
                        primaryInput: "Quantum System",
                        secondaryInput: "Quantum Engage",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.hold],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-a3-controls",
            title: "A3 Stick",
            boxPositionStart: [
                -343,
                -48
              ],
              boxPositionEnd: [
                510,
                105
              ],
            startAnchorAttachmentSide: "right",
            endAnchorAttachmentSide: "left",
            icons: [A3Icon],
            iconWidth: 40,
            visible: true,
            controlScheme: [
                {
                    id: "left-a3-up",
                    label: "A3-Stick Up",
                    inputs: {
                        primaryInput: "All Systems Down",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a3-right",
                    label: "A3-Stick Right",
                    inputs: {
                        primaryInput: "Shields Power",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a3-bottom",
                    label: "A3-Stick Bottom",
                    inputs: {
                        primaryInput: "Thruster Power",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a3-left",
                    label: "A3-Stick Left",
                    inputs: {
                        primaryInput: "Weapon Power",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a3-extra",
                    label: "A3-Stick Press",
                    inputs: {
                        primaryInput: "Flight Ready",
                        secondaryInput: "All Systems On",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-a4-controls",
            title: "A4-Stick",
            boxPositionStart: [
                -347,
                173
              ],
              boxPositionEnd: [
                500,
                70
              ],
            startAnchorAttachmentSide: "right",
            endAnchorAttachmentSide: "left",
            icons: [A4Icon],
            iconWidth: 40,
            visible: true,
            controlScheme: [
                {
                    id: "left-a4-up",
                    label: "A4-Stick Up",
                    inputs: {
                        primaryInput: "Cycle Camera (3rd Person)",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a4-right",
                    label: "A4-Stick Right",
                    inputs: {
                        primaryInput: "Head Tracking Reset",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a4-bottom",
                    label: "A4-Stick Bottom",
                    inputs: {
                        primaryInput: "Look Behind",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a4-left",
                    label: "A4-Stick Left",
                    inputs: {
                        primaryInput: "Head Tracking",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-a4-extra",
                    label: "A4-Stick Press",
                    inputs: {
                        primaryInput: "Free Look",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-b1-controls",
            title: "B1-Button",
            boxPositionStart: [
                527,
                -268
              ],
              boxPositionEnd: [
                780,
                70
              ],
            startAnchorAttachmentSide: "bottom",
            endAnchorAttachmentSide: "left",
            icons: [B1Icon],
            iconWidth: 34,
            visible: true,
            controlScheme: [
                {
                    id: "left-b1-press",
                    label: "B1 Button Press",
                    inputs: {
                        primaryInput: "Toggle Scanning Mode",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-c1-controls",
            title: "C1-Stick",
            boxPositionStart: [
                -353,
                378
              ],
              boxPositionEnd: [
                510,
                180
              ],
            startAnchorAttachmentSide: "auto",
            endAnchorAttachmentSide: "left",
            icons: [C1Icon],
            iconWidth: 34,
            visible: true,
            controlScheme: [
                {
                    id: "left-c1-up",
                    label: "C1-Stick Up",
                    inputs: {
                        primaryInput: "Stagger Mode",
                        secondaryInput: "Stagger Mode",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.turret],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-c1-right",
                    label: "C1-Stick Right",
                    inputs: {
                        primaryInput: "Turret ESP",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [modesArray.turret],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-c1-bottom",
                    label: "C1-Stick Bottom",
                    inputs: {
                        primaryInput: "Gyro Mode",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [modesArray.turret],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-c1-left",
                    label: "C1-Stick Left",
                    inputs: {
                        primaryInput: "Turret Vjoy",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [modesArray.turret],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-c1-extra",
                    label: "C1-Stick Press",
                    inputs: {
                        primaryInput: "Recenter",
                        secondaryInput: "Cycle Gimbal",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [modesArray.turret],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-d1-controls",
            title: "D1-Button",
            boxPositionStart: [
                709,
                442
              ],
              boxPositionEnd: [
                695,
                165
              ],
            startAnchorAttachmentSide: "auto",
            endAnchorAttachmentSide: "bottom",
            icons: [D1Icon],
            iconWidth: 34,
            visible: true,
            controlScheme: [
                {
                    id: "left-d1-press",
                    label: "D1-Button Press",
                    inputs: {
                        primaryInput: "Decouple",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-e-t-controls",
            title: "E/T Thrust Levers",
            boxPositionStart: [
                112,
                701
              ],
              boxPositionEnd: [
                380,
                400
              ],
            startAnchorAttachmentSide: "top",
            endAnchorAttachmentSide: "bottom",
            icons: [T1Icon, E1Icon, E2Icon],
            iconWidth: 14,
            visible: true,
            controlScheme: [
                {
                    id: "left-e1-upper-dial",
                    label: "E1-Thrust Up",
                    inputs: {
                        primaryInput: "Open Doors",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-t1-upper-dial",
                    label: "T1-Thrust Up",
                    inputs: {
                        primaryInput: "Mining Throttle",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-e2-upper-dial",
                    label: "E3-Thrust Up",
                    inputs: {
                        primaryInput: "Unlock Doors",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-e1-lower-dial",
                    label: "E1-Thrust Down",
                    inputs: {
                        primaryInput: "Close Doors",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-t1-lower-dial",
                    label: "T1-Thrust Down",
                    inputs: {
                        primaryInput: "Mining Throttle",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-e2-lower-dial",
                    label: "E2-Thrust Down",
                    inputs: {
                        primaryInput: "Lock Doors",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-f-controls",
            title: "F-Buttons",
            boxPositionStart: [
                -352,
                684
              ],
              boxPositionEnd: [
                410,
                350
              ],
            startAnchorAttachmentSide: "right",
            endAnchorAttachmentSide: "auto",
            icons: [F1Icon, F2Icon, F3Icon],
            iconWidth: 24,
            visible: true,
            controlScheme: [
                {
                    id: "left-f2-press",
                    label: "F2-Button Press",
                    inputs: {
                        primaryInput: "Cycle Pip",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-f1-press",
                    label: "F1-Button Press",
                    inputs: {
                        primaryInput: "Ship Lights",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-f3-press",
                    label: "F3-Button Press",
                    inputs: {
                        primaryInput: "Request Landing",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-red-trigger-controls",
            title: "Red Trigger",
            boxPositionStart: [
                412,
                598
              ],
              boxPositionEnd: [
                740,
                100
              ],
            startAnchorAttachmentSide: "auto",
            endAnchorAttachmentSide: "left",
            icons: [TriggerIcon],
            iconWidth: 20,
            visible: true,
            controlScheme: [
                {
                    id: "left-red-trigger-press-stage-one",
                    label: "Stage One",
                    inputs: {
                        primaryInput: "Afterburner",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-red-trigger-press-stage-two",
                    label: "Stage Two",
                    inputs: {
                        primaryInput: "Toggle SCM Limiter",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "left-black-trigger-controls",
            title: "Black Trigger",
            boxPositionStart: [
                766,
                -272
              ],
              boxPositionEnd: [
                760,
                100
              ],
            startAnchorAttachmentSide: "bottom",
            endAnchorAttachmentSide: "right",
            icons: [TriggerIcon, UpDownIcon],
            iconWidth: 10,
            visible: true,
            controlScheme: [
                {
                    id: "left-black-trigger-press-up",
                    label: "Push Trigger",
                    inputs: {
                        primaryInput: "Scan Ping",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [modesArray.scanning],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "left-black-trigger-press-down",
                    label: "Pull Trigger",
                    inputs: {
                        primaryInput: "SpaceBrake",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        // Right Side
        {
            id: "right-direction-controls",
            boxPositionStart: [
                2032,
                -290
              ],
            title: "Direction Controls",
            boxPositionEnd: null,
            startAnchorAttachmentSide: "auto",
            endAnchorAttachmentSide: "auto",
            icons: [ZCCWIcon, XYIcon],
            iconWidth: 50,
            visible: true,
            controlScheme: [
                {
                    id: "right-z",
                    label: "Z-Stick",
                    inputs: {
                        primaryInput: "Roll",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-x-y-key-horizontal",
                    label: "X/Y-Stick Horizontal",
                    inputs: {
                        primaryInput: "Yaw",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-x-y-key-vertical",
                    label: "X/Y-Stick Vertikal",
                    inputs: {
                        primaryInput: "Pitch",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "right-a1-controls",
            title: "A1-Stick",
            boxPositionStart: [
                1560,
                -289
              ],
              boxPositionEnd: [
                1240,
                85
              ],
            startAnchorAttachmentSide: "bottom",
            endAnchorAttachmentSide: "auto",
            icons: [A1Icon],
            iconWidth: 40,
            visible: true,
            controlScheme: [
                {
                    id: "right-a1-up",
                    label: "A1-Stick Up",
                    inputs: {
                        primaryInput: "Mining Module 1",
                        secondaryInput: "Target Reticle",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [modesArray.mining],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-a1-right",
                    label: "A1-Stick Right",
                    inputs: {
                        primaryInput: "Target Hostile",
                        secondaryInput: "Mining Module 3",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.mining],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-a1-bottom",
                    label: "A1-Stick Bottom",
                    inputs: {
                        primaryInput: "Unlock Target",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-a1-left",
                    label: "A1-Stick Left",
                    inputs: {
                        primaryInput: "Target Attacker",
                        secondaryInput: "Mining Module 2",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.mining],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-a1-extra",
                    label: "A1 Button Press",
                    inputs: {
                        primaryInput: "*Mode Switch",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "right-a2-controls",
            title: "A2-Button",
            boxPositionStart: [
                1299,
                -286
              ],
              boxPositionEnd: [
                1245,
                125
              ],
            startAnchorAttachmentSide: "bottom",
            endAnchorAttachmentSide: "right",
            icons: [A2Icon],
            iconWidth: 34,
            visible: true,
            controlScheme: [
                {
                    id: "right-a2-press",
                    label: "A2 Button Press",
                    inputs: {
                        primaryInput: "Missile Op Mode",
                        secondaryInput: "Set Bomb Impact",
                        tertiaryInput: "Switch Mining Laser",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.missile, modesArray.hold],
                        tertiaryMode: [modesArray.mining],
                    },
                },
            ],
        },
        {
            id: "right-a3-controls",
            title: "A3 Stick",
            boxPositionStart: [
                1672,
                41
              ],
              boxPositionEnd: [
                1265,
                105
              ],
            startAnchorAttachmentSide: "auto",
            endAnchorAttachmentSide: "auto",
            icons: [A3Icon],
            iconWidth: 40,
            visible: true,
            controlScheme: [
                {
                    id: "right-a3-up",
                    label: "A3-Stick Up",
                    inputs: {
                        primaryInput: "Increase Spacing",
                        secondaryInput: "Missile Count Up",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [modesArray.salvage],
                        secondaryMode: [modesArray.missile],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-a3-right",
                    label: "A3-Stick Right",
                    inputs: {
                        primaryInput: "Sub Target Fwd",
                        secondaryInput: "Missile Type FWO",
                        tertiaryInput: "Toggle Right Tool",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.missile],
                        tertiaryMode: [modesArray.salvage],
                    },
                },
                {
                    id: "right-a3-bottom",
                    label: "A3-Stick Bottom",
                    inputs: {
                        primaryInput: "Missile Count Down",
                        secondaryInput: "Decrease Spacing",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [modesArray.missile],
                        secondaryMode: [modesArray.salvage],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-a3-left",
                    label: "A3-Stick Left",
                    inputs: {
                        primaryInput: "Sub Target Back",
                        secondaryInput: "Missile Type FWD",
                        tertiaryInput: "Toggle Left Tool",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.missile],
                        tertiaryMode: [modesArray.salvage],
                    },
                },
                {
                    id: "right-a3-extra",
                    label: "A3-Stick Press",
                    inputs: {
                        primaryInput: "Reset Sub Target",
                        secondaryInput: "Toggle Orientation",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.salvage],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "right-a4-controls",
            title: "A4-Stick",
            boxPositionStart: [
                1704,
                318
              ],
              boxPositionEnd: [
                1272,
                70
              ],
            startAnchorAttachmentSide: "auto",
            endAnchorAttachmentSide: "auto",
            icons: [A4Icon],
            iconWidth: 40,
            visible: true,
            controlScheme: [
                {
                    id: "right-a4-up",
                    label: "A4-Stick Up",
                    inputs: {
                        primaryInput: "Pin Selected Target",
                        secondaryInput: "Unpin All Targets",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray["double tap"]],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-a4-right",
                    label: "A4-Stick Right",
                    inputs: {
                        primaryInput: "PWR Inc. Shields",
                        secondaryInput: "Max Shield PWR",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.hold],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-a4-bottom",
                    label: "A4-Stick Bottom",
                    inputs: {
                        primaryInput: "PWR Inc. Engines",
                        secondaryInput: "Max PWR Engines",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.hold],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-a4-left",
                    label: "A4-Stick Left",
                    inputs: {
                        primaryInput: "PWR Inc. Weapons",
                        secondaryInput: "Max Weapon PWR",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.hold],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-a4-extra",
                    label: "A4-Stick Press",
                    inputs: {
                        primaryInput: "Reset Power",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "right-b1-controls",
            title: "B1-Button",
            boxPositionStart: [
                1077,
                -284
              ],
              boxPositionEnd: [
                980,
                60
              ],
            startAnchorAttachmentSide: "auto",
            endAnchorAttachmentSide: "auto",
            icons: [B1Icon],
            iconWidth: 34,
            visible: true,
            controlScheme: [
                {
                    id: "right-b1-press",
                    label: "B1 Button Press",
                    inputs: {
                        primaryInput: "Toggle Mining Mode",
                        secondaryInput: "Toggle Salvage Mode",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "right-c1-controls",
            title: "C1-Stick",
            boxPositionStart: [
                1794,
                559
              ],
              boxPositionEnd: [
                1274,
                185
              ],
            startAnchorAttachmentSide: "auto",
            endAnchorAttachmentSide: "bottom",
            icons: [C1Icon],
            iconWidth: 34,
            visible: true,
            controlScheme: [
                {
                    id: "right-c1-up",
                    label: "C1-Stick Up",
                    inputs: {
                        primaryInput: "Shields Fwd",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-c1-right",
                    label: "C1-Stick Right",
                    inputs: {
                        primaryInput: "Shields Right",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-c1-bottom",
                    label: "C1-Stick Bottom",
                    inputs: {
                        primaryInput: "Shields Aft",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-c1-left",
                    label: "C1-Stick Left",
                    inputs: {
                        primaryInput: "Shields Left",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-c1-extra",
                    label: "C1-Stick Press",
                    inputs: {
                        primaryInput: "Rebalance Shields",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "right-d1-controls",
            title: "D1-Button",
            boxPositionStart: [
                944,
                548
              ],
              boxPositionEnd: [
                1065,
                155
              ],
            startAnchorAttachmentSide: "top",
            endAnchorAttachmentSide: "bottom",
            icons: [D1Icon],
            iconWidth: 34,
            visible: true,
            controlScheme: [
                {
                    id: "right-d1-press",
                    label: "D1-Button Press",
                    inputs: {
                        primaryInput: "VOIP PTT",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "right-e-t-controls",
            title: "E/T Thrust Levers",
            boxPositionStart: [
                964,
                707
              ],
              boxPositionEnd: [
                1420,
                400
              ],
            startAnchorAttachmentSide: "right",
            endAnchorAttachmentSide: "bottom",
            icons: [E1Icon, T1Icon, E2Icon],
            iconWidth: 14,
            visible: true,
            controlScheme: [
                {
                    id: "right-e1-upper-dial",
                    label: "E1-Thrust Up",
                    inputs: {
                        primaryInput: "Expand Config",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-t1-upper-erdial",
                    label: "T1-Thrust Up",
                    inputs: {
                        primaryInput: "Beam Spacing",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [modesArray.salvage],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-e2-upper-erdial",
                    label: "E3-Thrust Up",
                    inputs: {
                        primaryInput: "Decoy Burst Size Inc",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-e1-lower-dial",
                    label: "E1-Thrust Down",
                    inputs: {
                        primaryInput: "Contract Config",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-t1-lower-erdial",
                    label: "T1-Thrust Down",
                    inputs: {
                        primaryInput: "Beam Spacing",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [modesArray.salvage],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-e2-lower-erdial",
                    label: "E2-Thrust Down",
                    inputs: {
                        primaryInput: "Decody Burst Size Dec",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "right-f-controls",
            title: "F-Buttons",
            boxPositionStart: [
                1723,
                733
              ],
              boxPositionEnd: [
                1385,
                350
              ],
            startAnchorAttachmentSide: "left",
            endAnchorAttachmentSide: "bottom",
            icons: [F1Icon, F2Icon, F3Icon],
            iconWidth: 24,
            visible: true,
            controlScheme: [
                {
                    id: "right-f2-press",
                    label: "F2-Button Press",
                    inputs: {
                        primaryInput: "Exit Seat/Turret",
                        secondaryInput: "Quick Exit",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.hold],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-f1-press",
                    label: "F1-Button Press",
                    inputs: {
                        primaryInput: "Landing Gear/Req. Dock",
                        secondaryInput: "Auto Land/Dock",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.hold],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-f3-press",
                    label: "F3-Button Press",
                    inputs: {
                        primaryInput: "VTOL",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "right-red-trigger-controls",
            title: "Red Trigger",
            boxPositionStart: [
                1120,
                527
              ],
              boxPositionEnd: [
                1025,
                100
              ],
            startAnchorAttachmentSide: "top",
            endAnchorAttachmentSide: "bottom",
            icons: [TriggerIcon],
            iconWidth: 20,
            visible: true,
            controlScheme: [
                {
                    id: "right-red-trigger-press-stage-one",
                    label: "Stage One",
                    inputs: {
                        primaryInput: "Weapon Group 1",
                        secondaryInput: "Fire Missile",
                        tertiaryInput: "Active Scan",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [modesArray.missile],
                        tertiaryMode: [modesArray.mining],
                    },
                },
                {
                    id: "right-red-trigger-press-stage-two",
                    label: "Stage Two",
                    inputs: {
                        primaryInput: "Weapon Group 2",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
        {
            id: "right-black-trigger-controls",
            title: "Black Trigger",
            boxPositionStart: [
                949,
                -276
              ],
              boxPositionEnd: [
                1000,
                100
              ],
            startAnchorAttachmentSide: "bottom",
            endAnchorAttachmentSide: "top",
            icons: [TriggerIcon, UpDownIcon],
            iconWidth: 10,
            visible: true,
            controlScheme: [
                {
                    id: "right-black-trigger-press-up",
                    label: "Push Trigger",
                    inputs: {
                        primaryInput: "Decoy",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
                {
                    id: "right-black-trigger-press-down",
                    label: "Pull Trigger",
                    inputs: {
                        primaryInput: "Noise",
                        secondaryInput: "",
                        tertiaryInput: "",
                    },
                    modes: {
                        primaryMode: [],
                        secondaryMode: [],
                        tertiaryMode: [],
                    },
                },
            ],
        },
    ],
};
