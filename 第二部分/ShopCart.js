(function(window) {
    var ShopCart = function(prefix, defCart) {
        var cart = new Cart(document.getElementsByClassName(prefix)[0]);
        for (var i in defCart) {
            cart.add(defCart[i]);
        }
        cart.updateTotal();
    };

    function Cart(obj) {
        this.items = [];
        var find = new Find(obj);
        this.all = find.querySelector('.cart-all');
        this.num = find.querySelector('.cart-total-num');
        this.price = find.querySelector('.cart-total-price');
        this.tmp = find.querySelector('.cart-item');
        this.bottom = find.querySelector('.cart-bottom');
        this.tmp.parentNode.removeChild(this.tmp);
        var cart = this;
        this.all.onclick = function() {
            cart.toggleCheckAll();
        };
    }

    Cart.prototype = {
        add: function(data) {
            var tmp = this.tmp.cloneNode(true);
            var item = new Item(tmp, data);
            this.items.push(item);
            this.bottom.before(tmp);
            item.updateSubtotal();
        },

        updateTotal: function() {
            var num = 0,
                price = 0;
            for (var i in this.items) {
                var item = this.items[i];
                if (item.check.checked) {
                    num += item.data.num;
                    price += item.data.num * item.data.price;
                }
            }
            this.num.textContent = num;
            this.price.textContent = price.toFixed(2);
        },

        toggleCheckAll: function() {
            var checked = !this.items[0].check.checked;
            for (var i in this.items) {
                this.items[i].check.checked = checked;
            }
            this.updateTotal();
        }
    };

    function Item(tmp, data) {
        this.check = tmp.querySelector('.cart-check');
        this.name = tmp.querySelector('.cart-name');
        this.price = tmp.querySelector('.cart-price');
        this.num = tmp.querySelector('.cart-num');
        this.add = tmp.querySelector('.cart-add');
        this.reduce = tmp.querySelector('.cart-reduce');
        this.subtotal = tmp.querySelector('.cart-subtotal');
        this.del = tmp.querySelector('.cart-del');
        this.data = data;
        this.name.textContent = data.name;
        this.price.textContent = data.price.toFixed(2);
        this.num.textContent = data.num;

        var item = this;
        this.check.onclick = function() {
            item.updateSubtotal();
        };
        this.add.onclick = function() {
            item.data.num++;
            item.num.textContent = item.data.num;
            item.updateSubtotal();
        };
        this.reduce.onclick = function() {
            if (item.data.num > 1) {
                item.data.num--;
                item.num.textContent = item.data.num;
                item.updateSubtotal();
            } else {
                alert('至少选择1件，如不需要，请直接删除');
            }
        };
        this.del.onclick = function() {
            if (confirm('您确定要删除此商品吗？')) {
                tmp.parentNode.removeChild(tmp);
                item.cart.del(item);
                item.cart.updateTotal();
            }
        };
    }

    Item.prototype = {
        updateSubtotal: function() {
            this.subtotal.textContent = (this.data.num * this.data.price).toFixed(2);
        }
    };

    function Find(obj) {
        this.obj = obj;
    }

    Find.prototype = {
        querySelector: function(selector) {
            return this.obj.querySelector(selector);
        }
    }

    window.ShopCart = ShopCart;
})(window);