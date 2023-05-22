import { useAtom } from "jotai";
import styles from "./settings.module.scss";
import { initialConfigAtom } from "../state/configState";
import {
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Slider,
} from "@mui/material";

import { SettingsTypes, colors } from "../data/initialConfig";
import { stringToPascalCase } from "./inputBlock";

export default function Settings() {
    const [config, setConfig] = useAtom(initialConfigAtom);

    const {
        fontSize,
        lineStyle,
        curveness,
        strokeWidth,
        headSize,
        color,
        gridBreak,
    } = config.settings;

    const handleSliderChange = (e: Event, type: keyof SettingsTypes) => {
        const value: string | number = (e.target as HTMLInputElement).value;

        const updatedConfig = { ...config };
        if (type === "headSize")
            updatedConfig.settings.headSize = value as unknown as number;

        if (type === "strokeWidth")
            updatedConfig.settings.strokeWidth = value as unknown as number;

        if (type === "fontSize")
            updatedConfig.settings.fontSize = value as unknown as number;

        if (type === "curveness")
            updatedConfig.settings.curveness = value as unknown as number;

        if (type === "gridBreak")
            updatedConfig.settings.gridBreak = `${value}%`;
        setConfig(updatedConfig);
    };

    const handleSliderStyleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = (event.target as HTMLInputElement).value;

        const updatedConfig = { ...config };
        updatedConfig.settings.lineStyle = value as "grid" | "smooth";

        setConfig(updatedConfig);
    };

    const colorChangeHandler = (event: { target: HTMLSelectElement }) => {
        const value = (event.target as HTMLSelectElement).value;
        const updatedConfig = { ...config };
        updatedConfig.settings.color = value;

        setConfig(updatedConfig);
    };

    return (
        <div className={styles.settingsContainer}>
            <h3>Settings</h3>
            <div className={styles.settingBoxes}>
                <div>
                    <label>Font size</label>
                    <Slider
                        aria-label="Font Size"
                        value={fontSize}
                        valueLabelDisplay="auto"
                        size="medium"
                        step={1}
                        marks
                        min={12}
                        max={32}
                        onChange={(e) => handleSliderChange(e, "fontSize")}
                    />
                </div>
                <div>
                    <label>Line Color</label>
                    <select value={color} onChange={colorChangeHandler}>
                        {Object.keys(colors).map((item) => (
                            <option key={item}>
                                {stringToPascalCase(item)}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <FormLabel id="line-style">Line Style</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="Line Style"
                        name="lineStyle"
                        value={lineStyle}
                        onChange={handleSliderStyleChange}
                    >
                        <FormControlLabel
                            value="grid"
                            control={<Radio />}
                            label="Grid"
                        />
                        <FormControlLabel
                            value="smooth"
                            control={<Radio />}
                            label="Smooth"
                        />
                    </RadioGroup>
                </div>
                {lineStyle === "grid" && (
                    <div>
                        <label>Grid Break</label>
                        <Slider
                            aria-label="Grid Break"
                            value={Number(gridBreak.split("%")[0])}
                            valueLabelDisplay="auto"
                            size="medium"
                            step={5}
                            marks
                            min={0}
                            max={100}
                            onChange={(e) => handleSliderChange(e, "gridBreak")}
                        />
                    </div>
                )}
                {lineStyle === "smooth" && (
                    <div>
                        <label>Curveness</label>
                        <Slider
                            aria-label="Curveness"
                            value={curveness}
                            valueLabelDisplay="auto"
                            size="medium"
                            step={0.1}
                            marks
                            min={0}
                            max={2}
                            onChange={(e) => handleSliderChange(e, "curveness")}
                        />
                    </div>
                )}
                <div>
                    <label>Stroke Width</label>
                    <Slider
                        aria-label="Stroke Width"
                        value={strokeWidth}
                        valueLabelDisplay="auto"
                        size="medium"
                        step={1}
                        marks
                        min={1}
                        max={6}
                        onChange={(e) => handleSliderChange(e, "strokeWidth")}
                    />
                </div>
                <div>
                    <label>Head Size</label>
                    <Slider
                        aria-label="Head Size"
                        value={headSize}
                        valueLabelDisplay="auto"
                        size="medium"
                        step={1}
                        marks
                        min={1}
                        max={6}
                        onChange={(e) => handleSliderChange(e, "headSize")}
                    />
                </div>
            </div>
        </div>
    );
}
