import {IconType} from "../../shared/enums/IconType";
import {IpcBackground} from "./IpcBackground";

export abstract class ChromeNotify {
    static createNotification(iconType: IconType, body: string): void {
        IpcBackground.sendMessage(body);
        chrome.notifications.create({
            title: "[torrent2box]",
            iconUrl: iconType,
            type: "basic",
            message: body
        }, (notificationId) => {
            setTimeout(() => chrome.notifications.clear(notificationId), 5000);
        });
    }
}
