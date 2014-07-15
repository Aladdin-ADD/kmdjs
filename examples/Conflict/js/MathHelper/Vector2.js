﻿define("MathHelper.Vector2", {
    init: function (x, y) {
        this.x = x;
        this.y = y;
        this.scope = "MathHelper.Vector2";
    },
    add: function (v) {
        this.x += v.x;
        this.y += v.y;
    }
})
