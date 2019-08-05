(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{282:function(t,e,a){"use strict";a.r(e);var i=a(22),s=Object(i.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"manual-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-testing","aria-hidden":"true"}},[t._v("#")]),t._v(" Manual Testing")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#setup"}},[t._v("Setup")]),a("ul",[a("li",[a("a",{attrs:{href:"#how-to-checkout-a-pull-request"}},[t._v("How to checkout a pull request?")])]),a("li",[a("a",{attrs:{href:"#datafolder-location"}},[t._v("DataFolder location?")])]),a("li",[a("a",{attrs:{href:"#how-to-check-for-errors"}},[t._v("How to check for errors?")])]),a("li",[a("a",{attrs:{href:"#how-to-determine-if-the-application-has-exited"}},[t._v("How to determine if the application has exited?")])])])]),a("li",[a("a",{attrs:{href:"#gui-exit-tests"}},[t._v("GUI exit tests")])]),a("li",[a("a",{attrs:{href:"#filter-downloading-tests"}},[t._v("Filter downloading tests")])]),a("li",[a("a",{attrs:{href:"#context-menu-and-selection-tests"}},[t._v("Context menu and selection tests")])])])]),a("p"),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("The goal of this document is to establish a manual testing workflow and checklist for Wasabi Wallet in order to make sure larger pull requests and releases do not accidentally ruin vital functionality.")]),t._v(" "),a("h1",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment","aria-hidden":"true"}},[t._v("#")]),t._v(" Environment")]),t._v(" "),a("p",[t._v("Someone must go through this document before every release on Windows 10, Ubuntu 18.04 (Bionic Beaver) and macOS 10.14 (Mojave).")]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("See this quick tutorial for getting the latest release and for updating:")]),t._v(" "),a("p",[t._v("https://github.com/zkSNACKs/WalletWasabi#build-from-source-code")]),t._v(" "),a("h4",{attrs:{id:"run-wasabi-in-release-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-wasabi-in-release-mode","aria-hidden":"true"}},[t._v("#")]),t._v(" Run Wasabi in Release Mode")]),t._v(" "),a("p",[t._v("Run Wasabi with "),a("code",[t._v("dotnet run -c Release")]),t._v(" from the "),a("code",[t._v("WalletWasabi.Gui")]),t._v(" folder.")]),t._v(" "),a("h3",{attrs:{id:"how-to-checkout-a-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-checkout-a-pull-request","aria-hidden":"true"}},[t._v("#")]),t._v(" How to checkout a pull request?")]),t._v(" "),a("p",[t._v("Check the id of the pull request.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin pull/ID/head:yourbranchname\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout yourbranchname\n")])])]),a("h4",{attrs:{id:"updating-a-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-pull-request","aria-hidden":"true"}},[t._v("#")]),t._v(" Updating a pull request")]),t._v(" "),a("p",[t._v("If someone made a change to the pull request and you want to go through the tests again, first checkout the master branch "),a("code",[t._v("git checkout master")]),t._v(' then continue with the same procedure described in the "How to checkout a pull request?" part.\nIt will update your branch.')]),t._v(" "),a("h3",{attrs:{id:"datafolder-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datafolder-location","aria-hidden":"true"}},[t._v("#")]),t._v(" DataFolder location?")]),t._v(" "),a("p",[t._v("Open Wasabi and go to Main Menu / File / Open / Data Folder.")]),t._v(" "),a("h3",{attrs:{id:"how-to-check-for-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-check-for-errors","aria-hidden":"true"}},[t._v("#")]),t._v(" How to check for errors?")]),t._v(" "),a("p",[t._v("Standard procedure: look at the terminal.\nIf there is something saying ERROR or WARNING, that is probably an error.\nSpecial case: always defined at the specific test case.")]),t._v(" "),a("h3",{attrs:{id:"how-to-determine-if-the-application-has-exited"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-determine-if-the-application-has-exited","aria-hidden":"true"}},[t._v("#")]),t._v(" How to determine if the application has exited?")]),t._v(" "),a("p",[t._v("Look at the terminal.\nWait until log messages stop and the blinking cursor reappears.\nIf nothing happens, try to press enter.\nIf the application hanged, you can also check it in process manager.\nIf it is still running, there might be an endless loop: an error which does not let the application close.")]),t._v(" "),a("h1",{attrs:{id:"workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workflow","aria-hidden":"true"}},[t._v("#")]),t._v(" Workflow")]),t._v(" "),a("h2",{attrs:{id:"gui-exit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gui-exit-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" GUI exit tests")]),t._v(" "),a("ol",[a("li")]),t._v(" "),a("ul",[a("li",[t._v("Run Wasabi.")]),t._v(" "),a("li",[t._v("Immediately after the UI pops up, press the X button.")]),t._v(" "),a("li",[t._v("Wait until exit.")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li")]),t._v(" "),a("ul",[a("li",[t._v("Run Wasabi.")]),t._v(" "),a("li",[t._v("Wait until Backend is connected.")]),t._v(" "),a("li",[t._v("Press the X button.")]),t._v(" "),a("li",[t._v("Wait until exit.")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li")]),t._v(" "),a("ul",[a("li",[t._v("Delete all files from DataFolder/Client/BitcoinStore/Main")]),t._v(" "),a("li",[t._v("Run Wasabi.")]),t._v(" "),a("li",[t._v("Wait until Missing Filter less than 50000.")]),t._v(" "),a("li",[t._v("Press the X button.")]),t._v(" "),a("li",[t._v("Wait until exit.")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li")]),t._v(" "),a("ul",[a("li",[t._v("Run Wasabi.")]),t._v(" "),a("li",[t._v("Wait until Backend is connected.")]),t._v(" "),a("li",[t._v("Press the File / Exit.")]),t._v(" "),a("li",[t._v("Wait until exit.")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li")]),t._v(" "),a("ul",[a("li",[t._v("Run Wasabi.")]),t._v(" "),a("li",[t._v("Wait until Backend is connected.")]),t._v(" "),a("li",[t._v("Go to Terminal and press Ctrl-C.")]),t._v(" "),a("li",[t._v("Wait until exit.")])]),t._v(" "),a("h2",{attrs:{id:"filter-downloading-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter-downloading-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Filter downloading tests")]),t._v(" "),a("ol",[a("li")]),t._v(" "),a("ul",[a("li",[t._v("Delete all files from DataFolder/Client/BitcoinStore/Main")]),t._v(" "),a("li",[t._v("Wait until Backend is connected and all filter is downloaded.")]),t._v(" "),a("li",[t._v("Restart the application.")]),t._v(" "),a("li",[t._v("Filter download should not start again.")])]),t._v(" "),a("h2",{attrs:{id:"context-menu-and-selection-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-menu-and-selection-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Context menu and selection tests")]),t._v(" "),a("ol",[a("li")]),t._v(" "),a("ul",[a("li",[t._v("Run Wasabi.")]),t._v(" "),a("li",[t._v("Load one of your wallets.")]),t._v(" "),a("li",[t._v('Go to the "Receive" tab.')]),t._v(" "),a("li",[t._v("If you do not have any addresses, then generate a couple.")]),t._v(" "),a("li",[t._v("Select an address by right clicking on it.\nMake sure that the context menu pops up, and the address is highlighted.")]),t._v(" "),a("li",[t._v("Select another address by right clicking on it.\nMake sure again that the context menu pops up, and the address is highlighted.")])]),t._v(" "),a("h1",{attrs:{id:"checklist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checklist","aria-hidden":"true"}},[t._v("#")]),t._v(" Checklist")]),t._v(" "),a("p",[t._v("This is the template one can fill out and copypaste under a pull request.")]),t._v(" "),a("p",[t._v("---TEMPLATE START---")]),t._v(" "),a("p",[a("strong",[t._v("Operating System")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("pass")]),t._v(" foo - Test passed, no unusual things noticed.")]),t._v(" "),a("li",[a("strong",[t._v("fail")]),t._v(" bar - Test failed or something unusual noticed around it.")]),t._v(" "),a("li",[a("strong",[t._v("?")]),t._v(" buz - Test was omitted.")])]),t._v(" "),a("p",[t._v("---TEMPLATE END---")]),t._v(" "),a("p",[t._v("---TEMPLATE START---")]),t._v(" "),a("p",[a("strong",[t._v("Operating System")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("pass")]),t._v(" Wasabi GUI exit test")]),t._v(" "),a("li",[a("strong",[t._v("pass")]),t._v(" Filter downloading tests")]),t._v(" "),a("li",[a("strong",[t._v("pass")]),t._v(" Context menu and selection tests")])]),t._v(" "),a("p",[t._v("---TEMPLATE END---")])])},[],!1,null,null,null);e.default=s.exports}}]);