define(["jquery","headroom"],function(o,e){o&&(o.fn.headroom=function(t){return this.each(function(){var a=o(this),n=a.data("headroom"),r="object"==typeof t&&t;r=o.extend(!0,{},e.options,r),n||(n=new e(this,r),n.init(),a.data("headroom",n)),"string"==typeof t&&(n[t](),"destroy"===t&&a.removeData("headroom"))})},o("[data-headroom]").each(function(){var e=o(this);e.headroom(e.data())}))});