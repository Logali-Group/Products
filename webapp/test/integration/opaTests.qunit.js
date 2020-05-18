/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logaligroup/Products/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});