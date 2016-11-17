"use strict";
var fs = require('fs');
var ConfigData = (function () {
    function ConfigData() {
        var _this = this;
        this.config = {};
        this.getConfig = function () {
            return _this.config;
        };
        var content = fs.readFileSync('./config.json', { "encoding": "utf-8" });
        this.config = JSON.parse(content);
    }
    return ConfigData;
}());
exports.ConfigData = ConfigData;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9yZWFkQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLEVBQUUsV0FBTSxJQUNwQixDQUFDLENBRHVCO0FBR3hCO0lBRUk7UUFGSixpQkFTQztRQVJXLFdBQU0sR0FBUSxFQUFFLENBQUE7UUFLakIsY0FBUyxHQUFHO1lBQ2YsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUE7UUFDdEIsQ0FBQyxDQUFBO1FBTEcsSUFBSSxPQUFPLEdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUMvRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUlMLGlCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxrQkFBVSxhQVN0QixDQUFBIiwiZmlsZSI6InV0aWxzL3JlYWRDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcydcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0RhdGEge1xyXG4gICAgcHJpdmF0ZSBjb25maWc6IGFueSA9IHt9XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBsZXQgY29udGVudDogc3RyaW5nID0gZnMucmVhZEZpbGVTeW5jKCcuL2NvbmZpZy5qc29uJywgeyBcImVuY29kaW5nXCI6IFwidXRmLThcIiB9KVxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gSlNPTi5wYXJzZShjb250ZW50KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdcclxuICAgIH1cclxufSJdfQ==
