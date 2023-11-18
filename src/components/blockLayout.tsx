import { useAtom } from "jotai";
import { ControlScheme } from "../data/initialConfig";
import { initialConfigAtom } from "../state/configState";
import BlockElement from "./blockElement";

interface Props {
    controlScheme: ControlScheme[];
    id: string;
    icons?: string[];
    iconWidth?: number;
}

export default function BlockLayout({
    controlScheme,
    id,
    icons,
    iconWidth,
}: Props) {
    const [config] = useAtom(initialConfigAtom);

    return (
        <div className={id}>
            {controlScheme.map((item) => (
                <div key={item.id} className={item.id}>
                    <BlockElement item={item} />
                </div>
            ))}

            {icons !== undefined &&
                icons.map((icon) => {
                    const iconName = icon!.split("icons/")[1].split(".svg")[0];

                    return (
                        <div key={iconName} className={`${iconName}`}>
                            <img
                                src={icon}
                                width={
                                    (iconWidth as number) *
                                    (config.settings.fontSize / 16)
                                }
                            />
                        </div>
                    );
                })}
        </div>
    );
}
