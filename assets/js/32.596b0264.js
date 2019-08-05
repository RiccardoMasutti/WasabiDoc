(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{294:function(t,e,a){"use strict";a.r(e);var s=a(22),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"deterministic-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deterministic-build","aria-hidden":"true"}},[t._v("#")]),t._v(" Deterministic Build")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-assert-correct-environment"}},[t._v("1. Assert Correct Environment")])]),a("li",[a("a",{attrs:{href:"#_2-reproduce-builds"}},[t._v("2. Reproduce Builds")])]),a("li",[a("a",{attrs:{href:"#_3-verify-builds"}},[t._v("3. Verify Builds")]),a("ul",[a("li",[a("a",{attrs:{href:"#windows"}},[t._v("Windows")])]),a("li",[a("a",{attrs:{href:"#linux-osx"}},[t._v("Linux && OSX")])])])])])]),a("p"),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[t._v("Reproducible [or deterministic] builds are a set of software development practices that create an independently-verifiable path from source to binary code.  ~ "),a("a",{attrs:{href:"https://reproducible-builds.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReproducibleBuilds.org"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("This guide describes how to reproduce Wasabi's builds.")]),t._v(" "),a("ol",[a("li",[a("router-link",{attrs:{to:"/using-wasabi/DeterministicBuild.html#1-assert-correct-environment"}},[t._v("Assert Correct Environment")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/using-wasabi/DeterministicBuild.html#2-reproduce-builds"}},[t._v("Reproduce Builds")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/using-wasabi/DeterministicBuild.html#3-verify-builds"}},[t._v("Verify Builds")])],1)]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_1-assert-correct-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-assert-correct-environment","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Assert Correct Environment")]),t._v(" "),a("p",[t._v("In order to reproduce Wasabi's builds you need "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://www.microsoft.com/en-us/software-download/windows10ISO",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 10"),a("OutboundLink")],1),t._v(" and the version of "),a("a",{attrs:{href:"https://www.microsoft.com/net/download",target:"_blank",rel:"noopener noreferrer"}},[t._v(".NET Core SDK"),a("OutboundLink")],1),t._v(" that was the most recent in the time of building the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("release"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"_2-reproduce-builds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-reproduce-builds","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Reproduce Builds")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/zkSNACKs/WalletWasabi.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hash of the release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" // This works from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".3 release, https://github.com/zkSNACKs/WalletWasabi/releases\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" WalletWasabi/WalletWasabi.Packager/\ndotnet restore\ndotnet build\ndotnet run -- --onlybinaries\n")])])]),a("p",[t._v("This will build our binaries for Windows, OSX and Linux from source code and open them in a file explorer for you.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/8XAQzz4.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_3-verify-builds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-verify-builds","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Verify Builds")]),t._v(" "),a("p",[t._v("You can compare our binaries with the downloads we have on the website: https://wasabiwallet.io/\nIn order to end-to-end verify all the downloaded packages you need a Windows, a Linux, and an OSX machine.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/aI9Kx0c.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),a("p",[t._v("After you installed Wasabi from the "),a("code",[t._v(".msi")]),t._v(", it will be in "),a("code",[t._v("C:\\Program Files\\WasabiWallet")]),t._v(" folder.\nYou can compare it with your build:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --no-index win7-x64 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files\\WasabiWallet"')]),t._v("\n")])])]),a("h3",{attrs:{id:"linux-osx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-osx","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux && OSX")]),t._v(" "),a("p",[t._v("You can use the Windows Subsystem for Linux to verify all the packages in one go.\nAt the time of writing this guide we provide a "),a("code",[t._v(".tar.gz")]),t._v(" and a "),a("code",[t._v(".deb")]),t._v(" package for Linux and .dmg for OSX.\nInstall the "),a("code",[t._v(".deb")]),t._v(" package and extract the "),a("code",[t._v("tar.gz")]),t._v(" and "),a("code",[t._v(".dmg")]),t._v(" packages, then compare them with your build.")]),t._v(" "),a("p",[t._v("After installing WSL, just type "),a("code",[t._v("wsl")]),t._v(" in explorer where your downloaded and built packages are located.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/yRUjxvG.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"deb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deb","aria-hidden":"true"}},[t._v("#")]),t._v(" .deb")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg -i Wasabi-1.1.6.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --no-index linux-x64/ /usr/local/bin/wasabiwallet/\n")])])]),a("h4",{attrs:{id:"tar-gz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tar-gz","aria-hidden":"true"}},[t._v("#")]),t._v(" .tar.gz")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -pxzf WasabiLinux-1.1.6.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --no-index linux-x64/ WasabiLinux-1.1.6\n")])])]),a("h4",{attrs:{id:"dmg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmg","aria-hidden":"true"}},[t._v("#")]),t._v(" .dmg")]),t._v(" "),a("p",[t._v("You will need to install "),a("a",{attrs:{href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("7z"),a("OutboundLink")],1),t._v(" (or something else) to extract the "),a("code",[t._v(".dmg")]),t._v(": "),a("code",[t._v("sudo apt install p7zip-full")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("7z x Wasabi-1.1.6.dmg -oWasabiOsx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --no-index osx-x64/ WasabiOsx/Wasabi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Wallet.App/Contents/MacOS/\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);