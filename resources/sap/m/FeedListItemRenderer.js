/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.FeedListItemRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListItemBaseRenderer");sap.m.FeedListItemRenderer=sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);
sap.m.FeedListItemRenderer.renderLIAttributes=function(r,f){r.addClass("sapMFeedListItemTitleDiv");if(f._showSeparators===sap.m.ListSeparators.None){r.addClass("sapMFeedListShowSeparatorsNone")}else{r.addClass("sapMFeedListShowSeparatorsAll")}};
sap.m.FeedListItemRenderer.renderLIContent=function(r,f){var m=f.getId(),i=sap.ui.Device.system.phone;r.write('<article');r.writeControlData(f);r.addClass('sapMFeedListItem');r.writeClasses();r.write('>');if(!!f.getShowIcon()){this._writeImageControl(r,f,m)}if(i){r.write('<div class= "sapMFeedListItemHeader ');if(!!f.getShowIcon()){r.write('sapMFeedListItemHasFigure ')}if(!!f.getSender()&&!!f.getTimestamp()){r.write('sapMFeedListItemFullHeight')}r.write('" >');if(!!f.getSender()){r.write('<p id="'+m+'-name" class="sapMFeedListItemTextName">');r.renderControl(f._getLinkControl());r.write('</p>')}if(!!f.getTimestamp()){r.write('<p class="sapMFeedListItemTimestamp">');r.writeEscaped(f.getTimestamp());r.write('</p>')}r.write('</div>');r.write('<p class="sapMFeedListItemText">');r.write('<span id="'+m+'-realtext" class="sapMFeedListItemText">');if(!!f._checkTextIsExpandable()){this._writeCollapsedText(r,f,m)}else{r.writeEscaped(f.getText(),true)}r.write('</span>');r.write('</p>');if(!!f.getInfo()){r.write('<p class="sapMFeedListItemFooter">');if(!!f.getInfo()){r.write('<span id="'+m+'-info" class="sapMFeedListItemInfo">');r.writeEscaped(f.getInfo());r.write('</span>')}}}else{r.write('<div class= "sapMFeedListItemText ');if(!!f.getShowIcon()){r.write('sapMFeedListItemHasFigure ')}r.write('" >');r.write('<p id="'+m+'-text" class="sapMFeedListItemTextText" >');if(!!f.getSender()){r.write('<span id="'+m+'-name" class="sapMFeedListItemTextName">');r.renderControl(f._getLinkControl());r.write(': ');r.write('</span>')}r.write('<span id="'+m+'-realtext" class="sapMFeedListItemTextString">');if(!!f._checkTextIsExpandable()){this._writeCollapsedText(r,f,m)}else{r.writeEscaped(f.getText(),true)}r.write('</span>');if(!!f.getInfo()||!!f.getTimestamp()){r.write('<p class="sapMFeedListItemFooter">');if(!sap.ui.getCore().getConfiguration().getRTL()){if(!!f.getInfo()){this._writeInfo(r,f,m);if(!!f.getTimestamp()){r.write("<span>&#160&#160&#x00B7&#160&#160</span>")}}if(!!f.getTimestamp()){this._writeTimestamp(r,f,m)}}else{if(!!f.getTimestamp()){this._writeTimestamp(r,f,m)}if(!!f.getInfo()){if(!!f.getTimestamp()){r.write("<span>&#160&#160&#x00B7&#160&#160</span>")}this._writeInfo(r,f,m)}}}r.write('</p>');r.write('</div>')}r.write('</article>')};
sap.m.FeedListItemRenderer._writeImageControl=function(r,f,m){r.write('<figure id="'+m+'-figure" class ="sapMFeedListItemFigure');if(!!f.getIcon()){r.write('">')}else{r.write(' sapMFeedListItemIsDefaultIcon">')}if(!!f.getIconActive()){r.write('<a id="'+m+'-iconRef" ');r.write('tabindex="-1"');r.writeAttribute('href','javascript:void(0);');r.write('>')}r.renderControl(f._getImageControl());if(!!f.getIconActive()){r.write('</a>')}r.write('</figure>')};
sap.m.FeedListItemRenderer._writeCollapsedText=function(r,f,m){r.writeEscaped(f._getCollapsedText(),true);r.write('</span>');r.write('<span id="'+m+'-threeDots" class ="sapMFeedListItemTextString">');r.write("&#32&#46&#46&#46&#32");r.write('</span>');var l=f._getLinkExpandCollapse();l.addStyleClass("sapMFeedListItemLinkExpandCollapse");r.renderControl(l)};
sap.m.FeedListItemRenderer._writeTimestamp=function(r,f,m){r.write('<span id="'+m+'-timestamp">');r.writeEscaped(f.getTimestamp());r.write('</span>')};
sap.m.FeedListItemRenderer._writeInfo=function(r,f,m){r.write('<span id="'+m+'-info">');r.writeEscaped(f.getInfo());r.write('</span>')};
