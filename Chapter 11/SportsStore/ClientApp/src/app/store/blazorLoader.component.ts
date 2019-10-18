import { Component } from "@angular/core";

@Component({
    selector: "blazor",
    template: "<app></app>"
})
export class BlazorLoader {
    template: any = "";

    ngOnInit() {
        if (!document.getElementById("blazorScript")) {
            let scriptElem = document.createElement("script");
            scriptElem.type = "text/javascript";
            scriptElem.id = "blazorScript";
            scriptElem.src = "_framework/blazor.webassembly.js";
            document.getElementsByTagName("head")[0].appendChild(scriptElem);
        } 
    }
}
