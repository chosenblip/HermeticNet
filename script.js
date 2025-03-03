document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("command-input");
    const output = document.getElementById("output");

    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const command = inputField.value.toLowerCase().trim();
            inputField.value = "";
            handleCommand(command);
        }
    });

    function handleCommand(command) {
        let response = "";
        switch(command) {
            case "help":
                response = "Commands: help, files, games, exit";
                break;
            case "files":
                response = "Download files: <br> <a href='files/sample.txt' target='_blank'>sample.txt</a>";
                break;
            case "games":
                response = "Games not available yet. Coming soon!";
                break;
            case "exit":
                response = "Goodbye! Refresh to return.";
                break;
            default:
                response = "Unknown command. Type 'help' for a list of commands.";
        }
        output.innerHTML += "<br>> " + command + "<br>" + response;
    }
});
