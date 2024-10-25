import { DefaultLabel, DefaultInput } from "../atomic_components";

export function ServerInfo() {
    return (
        <div className="row-wrapper">
            <div>
                <DefaultLabel text="IP сервера:" />
                <DefaultInput id="server" />
            </div>
            <div>
                <DefaultLabel text="Порт:" />
                <DefaultInput id="port" />
            </div>
        </div>
    );
}