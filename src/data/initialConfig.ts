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
}

export enum AnchorPosition {
    "left",
    "right",
    "top",
    "bottom",
    "auto",
}

export const initialConfig: Config[] = [
    // Left Side
    {
        id: "left-direction-controls",
        title: "Direction Controls",
        boxPositionStart: [-100, 0],
        boxPositionEnd: null,
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [ZCWIcon, XYIcon],
        iconWidth: 50,
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
        boxPositionStart: [160, 0],
        boxPositionEnd: [540, 378],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [A1Icon],
        iconWidth: 40,
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
        boxPositionStart: [490, 200],
        boxPositionEnd: [536, 416],
        startAnchorAttachmentSide: "bottom",
        endAnchorAttachmentSide: "auto",
        icons: [A2Icon],
        iconWidth: 34,
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
        boxPositionStart: [-100, 340],
        boxPositionEnd: [510, 404],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [A3Icon],
        iconWidth: 40,
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
        boxPositionStart: [-100, 190],
        boxPositionEnd: [504, 372],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [A4Icon],
        iconWidth: 40,
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
        boxPositionStart: [580, 10],
        boxPositionEnd: [740, 364],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [B1Icon],
        iconWidth: 34,
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
        boxPositionStart: [-100, 510],
        boxPositionEnd: [510, 480],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [C1Icon],
        iconWidth: 34,
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
        boxPositionStart: [680, 640],
        boxPositionEnd: [664, 456],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [D1Icon],
        iconWidth: 34,
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
        boxPositionStart: [180, 760],
        boxPositionEnd: [386, 694],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [T1Icon, E1Icon, E2Icon],
        iconWidth: 14,
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
        boxPositionStart: [-100, 700],
        boxPositionEnd: [420, 636],
        startAnchorAttachmentSide: "right",
        endAnchorAttachmentSide: "auto",
        icons: [F1Icon, F2Icon, F3Icon],
        iconWidth: 24,
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
        boxPositionStart: [520, 780],
        boxPositionEnd: [700, 396],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "bottom",
        icons: [TriggerIcon],
        iconWidth: 20,
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
        boxPositionStart: [669, 140],
        boxPositionEnd: [724, 392],
        startAnchorAttachmentSide: "bottom",
        endAnchorAttachmentSide: "top",
        icons: [TriggerIcon, UpDownIcon],
        iconWidth: 10,
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
        boxPositionStart: [1540, 10],
        title: "Direction Controls",
        boxPositionEnd: null,
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [ZCCWIcon, XYIcon],
        iconWidth: 50,
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
        boxPositionStart: [1050, 0],
        boxPositionEnd: [1050, 380],
        startAnchorAttachmentSide: "bottom",
        endAnchorAttachmentSide: "auto",
        icons: [A1Icon],
        iconWidth: 40,
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
        boxPositionStart: [976, 180],
        boxPositionEnd: [1050, 420],
        startAnchorAttachmentSide: "bottom",
        endAnchorAttachmentSide: "top",
        icons: [A2Icon],
        iconWidth: 34,
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
        boxPositionStart: [1300, 360],
        boxPositionEnd: [1068, 406],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [A3Icon],
        iconWidth: 40,
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
        boxPositionStart: [1220, 172],
        boxPositionEnd: [1072, 370],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [A4Icon],
        iconWidth: 40,
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
        boxPositionStart: [900, 0],
        boxPositionEnd: [840, 360],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [B1Icon],
        iconWidth: 34,
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
        boxPositionStart: [1372, 554],
        boxPositionEnd: [1074, 480],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "bottom",
        icons: [C1Icon],
        iconWidth: 34,
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
        boxPositionStart: [820, 640],
        boxPositionEnd: [926, 455],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "auto",
        icons: [D1Icon],
        iconWidth: 34,
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
        boxPositionStart: [1040, 760],
        boxPositionEnd: [1210, 680],
        startAnchorAttachmentSide: "top",
        endAnchorAttachmentSide: "bottom",
        icons: [E1Icon, T1Icon, E2Icon],
        iconWidth: 14,
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
        boxPositionStart: [1384, 760],
        boxPositionEnd: [1182, 640],
        startAnchorAttachmentSide: "top",
        endAnchorAttachmentSide: "bottom",
        icons: [F1Icon, F2Icon, F3Icon],
        iconWidth: 24,
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
        boxPositionStart: [880, 760],
        boxPositionEnd: [880, 390],
        startAnchorAttachmentSide: "auto",
        endAnchorAttachmentSide: "bottom",
        icons: [TriggerIcon],
        iconWidth: 20,
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
        boxPositionStart: [823, 140],
        boxPositionEnd: [860, 390],
        startAnchorAttachmentSide: "bottom",
        endAnchorAttachmentSide: "top",
        icons: [TriggerIcon, UpDownIcon],
        iconWidth: 10,
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
];
