define(["jquery","underscore","marionette","loglevel","./base","../core","../models","../constants"],function(e,t,a,i,l,r,n,s){var o=a.ItemView.extend({className:"value-item",template:"values/item"}),u=a.ItemView.extend({className:"value-list",template:"values/list",collectionEvents:{add:"reloadText",remove:"reloadText",reset:"reloadText"},ui:{textarea:"textarea"},initialize:function(){t.bindAll(this,"parseText","reloadText"),this._parseText=t.debounce(this.parseText,s.INPUT_DELAY)},reloadText:function(){this.ui.textarea.val(this.collection.pluck("label").join("\n"))},parseText:function(){var a=[],l=this.ui.textarea.val().split("\n");t.each(l,function(t){if(t=e.trim(t)){var l=this.collection.get(t);l||(r.isSupported("2.3.2")?l={label:t}:(l={value:t},i.warn("Serrano 2.3.2+ is required for proper validation of search values"))),a.push(l)}},this),this.collection.reset(a)},onRender:function(){this.ui.textarea.on("input propertychange",this._parseText)}});return{ValueItem:o,ValueList:u}});
//# sourceMappingURL=values.js.map