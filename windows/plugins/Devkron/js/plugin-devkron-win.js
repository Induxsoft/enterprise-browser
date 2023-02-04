
var Devkron={
    engine:null,
    Run:async function(program,global_varname,obj, callback)
    {
        var output="";

        if (this.engine==null)
            await this.Initialize();

        if (!global_varname) global_varname="_context";
        if (!obj) obj={};

        output=await this.engine.Run(program,global_varname,JSON.stringify(obj));

        if (callback)
            callback(output);

        return output;
    },
    Initialize:async function(callback)
    {
        await chrome.webview.hostObjects.Native.ImportObject("DevkronCOM.dll","DevkronCOM.Core","Devkron");
        this.engine=chrome.webview.hostObjects.Devkron;

        if (callback) 
            callback(this.engine);
    }

};
