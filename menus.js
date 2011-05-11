var ui   = require("ui"),
    menu = require("menu"),
  hotkey = require("hotkey");

var file = menu.Menu({
    parent: ui.getMenu(),
    label: "File",
    children: [
        menu.Menu({
            label: "New Window",
            hotkey: "accel-n",
            type: "radio",
            checked: true,
            onClick: function(e) {
                alert("yay!");
            }
        }),
        menu.Menu({
            label: "New Tab",
            children: [
                menu.Menu({ label: "In the current window" }),
                menu.Menu({ label: "In a new window" }),
            ]
        })
    ]
});

// exit on meta-q
hotkey.register("meta-q", function() {
    window.exit();
});
