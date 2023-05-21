import { ControlScheme, modeColors, modesArray } from "../data/initialConfig";
import styled from "styled-components";

interface Props {
    item: ControlScheme;
}

export const modeValues = Object.values(modesArray);
export const modeKeys = Object.keys(modesArray);

const multipleModes = (mode: string[] | undefined) => mode && mode.length > 1;

export default function BlockElement({ item }: Props) {
    const { inputs, modes } = item;

    return (
        <>
            {inputs.primaryInput!.length > 0 && (
                <div className="primary">
                    {modes.primaryMode!.length > 0 && (
                        <Mode
                            isMultipleModes={multipleModes(modes.primaryMode)}
                            mode={modes.primaryMode}
                        />
                    )}
                    {inputs.primaryInput}
                </div>
            )}
            {inputs.secondaryInput!.length > 0 && (
                <div className="secondary">
                    {modes.secondaryMode!.length > 0 && (
                        <Mode
                            isMultipleModes={multipleModes(modes.secondaryMode)}
                            mode={modes.secondaryMode}
                        />
                    )}

                    {inputs.secondaryInput}
                </div>
            )}
            {inputs.tertiaryInput!.length > 0 && (
                <div className="tertiary">
                    {modes.tertiaryMode!.length > 0 && (
                        <Mode
                            isMultipleModes={multipleModes(modes.tertiaryMode)}
                            mode={modes.tertiaryMode}
                        />
                    )}

                    {inputs.tertiaryInput}
                </div>
            )}
        </>
    );
}

interface ModeProps {
    isMultipleModes?: boolean;
    mode: string[] | undefined;
}

const ColoredMode = styled.span`
  color: ${(prop) => prop.color}};
`;

function Mode({ isMultipleModes, mode }: ModeProps) {
    if (isMultipleModes) {
        return (
            <>
                {(mode as string[]).map((item) => {
                    const modeIndex = modeValues.indexOf(item);
                    const fullMode = modeKeys[modeIndex];
                    const color: string =
                        modeColors[fullMode as keyof typeof modeColors];

                    return (
                        <ColoredMode key={item} color={color}>
                            [{item}]
                        </ColoredMode>
                    );
                })}{" "}
            </>
        );
    }

    const singleModeIndex =
        !isMultipleModes && mode ? modeValues.indexOf(mode.toString()) : null;
    const fullMode = singleModeIndex !== null && modeKeys[singleModeIndex];
    const color: string = modeColors[fullMode as keyof typeof modeColors];

    return (
        <>
            <ColoredMode color={color}>[{mode}]</ColoredMode>{" "}
        </>
    );
}
