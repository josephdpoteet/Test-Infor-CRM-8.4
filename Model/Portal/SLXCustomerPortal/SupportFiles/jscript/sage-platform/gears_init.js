// Copyright 2007, Google Inc.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//  1. Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//  3. Neither the name of Google Inc. nor the names of its contributors may be
//     used to endorse or promote products derived from this software without
//     specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
// OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
// OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Sets up google.gears.*, which is *the only* supported way to access Gears.
//
// Circumvent this file at your own risk!
//
// In the future, Gears may automatically define google.gears.* without this
// file. Gears may use these objects to transparently fix bugs and compatibility
// issues. Applications that use the code below will continue to work seamlessly
// when that happens.

if (!window.slx) {
    //slx = {};
    initGears();
}

if (!window.slxmm) {
    initMailMerge();
}

var slx_installDesktopFeatures = function() {
    top.location = "Libraries/DesktopIntegration/OfficeIntegrationsetup.exe";
}

var xbar_installDesktopFeatures = function () {
    top.location = "Libraries/DesktopIntegration/Infor CRM Xbar Setup.exe";
}


function initMailMerge() {
    if (window.slxmm) {
        return;
    }

    if ((typeof ActiveXObject !== 'undefined') || (window.navigator.userAgent.toLowerCase().indexOf("trident") >= 0))  {
        // IE
        try {
            window.slxmm = new ActiveXObject('bho.slxmm');
        } catch (e) { 
            //oh well...
            window.slxmm = {};
        }
    }
    else
    {
        //everything but IE
        window.slxmm = {active: false};
    }
}

function initGears() {
    //nothing to do anymore...
    //return; 

    if (window.slx) {
        return;
    }

    if ((typeof ActiveXObject !== 'undefined') || (window.navigator.userAgent.toLowerCase().indexOf("trident") >= 0))  {
        // IE
        try {
            window.slx = new ActiveXObject('bho.slx');
        } catch (e) { 
            //oh well...
            window.slx = {};
        }
    }
    else
    {
        //everything but IE
        window.slx = {};
    }
}

