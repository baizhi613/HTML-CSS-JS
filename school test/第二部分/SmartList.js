(function(window) {
	var SmartList = function(prefix, defList) {
		Find.prototype.prefix = prefix;
		var find = new Find(document.getElementsByClassName(prefix)[0]);
		var list = new List(find.className('option'));
		for (var i in defList) {
			list.add(defList[i]);
		}
		var add = {
			'show': find.className('add-show'),
			'area': find.className('add-area'),
			'input': find.className('add-input'),
			'add': find.className('add-add'),
			'cancel': find.className('add-cancel')
		};
		add.show.onclick = function() {
			add.area.classList.remove(prefix + '-hide');
		};
		add.add.onclick = function() {
			list.add(add.input.value);
			add.input.value = ''; // 清空输入框
		};
		add.cancel.onclick = function() {
			add.area.classList.add(prefix + '-hide');
		};
	};

	function List(tmp) {
		this.tmp = tmp;
		this.obj = tmp.parentNode;
		this.obj.removeChild(tmp);
	}
	List.prototype = {
		add: function(value) {
			var tmp = this.tmp.cloneNode(true);
			var find = new Find(tmp);
			find.className('input').value = value;
			var obj = this.obj;
			find.className('up').onclick = function() {
				var prev = find.prev();
				if (prev) {
					obj.insertBefore(tmp, prev);
				} else {
					alert('已经是第1个');
				}
			};

			find.className('down').onclick = function() {
				var next = find.next();
				if (next) {
					obj.insertBefore(next, tmp);
				} else {
					alert('已经是最后1个');
				}
			};

			find.className('del').onclick = function() {
				if (confirm('您确定要删除？')) {
					obj.removeChild(tmp);
				}
			};

			this.obj.appendChild(tmp);
		}
	};

	function Find(obj) {
		this.obj = obj;
	}
	Find.prototype = {
		prefix: '',
		className: function(className) {
			return this.obj.getElementsByClassName(this.prefix + '-' + className)[0];
		},
		prev: function() {
			var node = this.obj.previousSibling;
			while (node != null) {
				if (node.nodeType === Node.ELEMENT_NODE) {
					break;
				}
				node = node.previousSibling;
			}
			return node;
		},
		next: function() {
			var node = this.obj.nextSibling;
			while (node != null) {
				if (node.nodeType === Node.ELEMENT_NODE) {
					break;
				}
				node = node.nextSibling;
			}
			return node;
		}
	};
	window['SmartList'] = SmartList;
})(window);