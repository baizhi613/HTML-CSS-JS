/*
1. 检查网页中是否有某个元素  if(document.getElementsByClassName('xx'));
2. 蛇的运动，控制蛇头进行元素加减，蛇身跟随：
       -蛇身跟随的原理： 通过一个数组记录前一时刻蛇每个关节的位置，下一时刻，将位置赋值
       -通过判断当前方向 currentDirec，确保蛇不能直接撞自己(左行时，按右键无效；上下同理)
3.  随机出现苹果
        - 判断网页内是否有苹果的元素  if(document.getElementsByClassName)
        - 判断苹果是第几个，当碰到消失   Array.prototpye.indexOf
        - 删除元素、节点 parent.removeChild(child);
4.  得分
        - 判断元素蛇头的位置是否与苹果的位置重合，重合后删除。 页面内插入内容： dom.innerHTML 或者 document.creatTextNode('我是文本')
5.  键盘响应
        - 绑定时间 addEventListener("keydown",function(e){})
        - 事件event的属性，包括keycode key等，不同的按键有不同的状态。 e 本身也是对象
6.  是否碰撞到自己的判断：
        -这个非常关键！ 每一次动作(setInterval)中，都会将当前的位置(bodyPosition)存储在一个对象中，对象中有x和y两个数组
    这个数组，一定要小心。统一变量，如果是parse
6.  事件流
7.  timer 互不干扰，独立作用域
8.  array.map   array.reduce  str.match  str.toUpperCase str.toLowerCase str.substring(0,3)  
9.  array.indexOf 与 str.indexOf的不同
10. jquery anmiate不支持  "transform" 
*/

function SnakeInit() {
	this.dom = {
		'btn': document.querySelector('.startGame'),
		'main': document.getElementById('gameField'),
		'scoreDisplay': document.querySelector('.actScore')
	};
	this.bodyPosition = [];
	this.applePosition = {};
	this.currentDirection = "right"; // 当前移动的方向
	this.score = 0;

	this.dom.scoreDisplay.textContent = this.score;
	this.dom.main.style.width = this.dom.main.style.height = '480px'; // 设置游戏区域大小

	this.bindStartEvent();
	this.spawnApple();
}

SnakeInit.prototype.collisionDetect = function() {
	// 检测是否撞墙
	if (
		this.bodyPosition[0].x < 0 ||
		this.bodyPosition[0].x > this.dom.main.clientWidth - 40 ||
		this.bodyPosition[0].y < 0 ||
		this.bodyPosition[0].y > this.dom.main.clientHeight - 40
	) {
		this.gameOver();
		return true;
	}

	// 检测是否撞到自己
	for (let i = 1; i < this.bodyPosition.length; i++) {
		if (this.bodyPosition[0].x === this.bodyPosition[i].x && this.bodyPosition[0].y === this.bodyPosition[i]
			.y) {
			this.gameOver();
			return true;
		}
	}
	return false;
};

SnakeInit.prototype.bindStartEvent = function() {
	var self = this;
	this.dom.btn.addEventListener('click', function() {
		this.style.display = "none";
		self.init('right');
	}, false);
	document.addEventListener('keydown', function(event) {
		if (event.key === 'ArrowUp' && self.currentDirection !== 'down') {
			self.currentDirection = 'up';
		} else if (event.key === 'ArrowDown' && self.currentDirection !== 'up') {
			self.currentDirection = 'down';
		} else if (event.key === 'ArrowLeft' && self.currentDirection !== 'right') {
			self.currentDirection = 'left';
		} else if (event.key === 'ArrowRight' && self.currentDirection !== 'left') {
			self.currentDirection = 'right';
		}
	});
};

SnakeInit.prototype.move = function() {
	let headX = this.bodyPosition[0].x;
	let headY = this.bodyPosition[0].y;

	switch (this.currentDirection) {
		case 'up':
			headY -= 40;
			break;
		case 'down':
			headY += 40;
			break;
		case 'left':
			headX -= 40;
			break;
		case 'right':
			headX += 40;
			break;
	}

	this.bodyPosition.unshift({
		x: headX,
		y: headY
	});

	if (headX === this.applePosition.x && headY === this.applePosition.y) {
		this.score++;
		this.dom.scoreDisplay.textContent = this.score;
		this.spawnApple();
	} else {
		this.bodyPosition.pop();
	}

	this.updateBody();
	if (this.collisionDetect()) return;
	requestAnimationFrame(() => this.move());
};

SnakeInit.prototype.updateBody = function() {
	for (let i = 0; i < this.bodyPosition.length; i++) {
		let element = this.dom.main.children[i];
		element.style.left = this.bodyPosition[i].x + 'px';
		element.style.top = this.bodyPosition[i].y + 'px';
	}
};

SnakeInit.prototype.spawnApple = function() {
	let apple = document.createElement('div');
	apple.className = "apple";

	let x = Math.floor(Math.random() * (this.dom.main.clientWidth / 40)) * 40;
	let y = Math.floor(Math.random() * (this.dom.main.clientHeight / 40)) * 40;

	while (this.bodyPosition.some(part => part.x === x && part.y === y)) {
		x = Math.floor(Math.random() * (this.dom.main.clientWidth / 40)) * 40;
		y = Math.floor(Math.random() * (this.dom.main.clientHeight / 40)) * 40;
	}

	apple.style.left = x + 'px';
	apple.style.top = y + 'px';
	this.dom.main.appendChild(apple);
	this.applePosition = {
		x,
		y
	};
};

SnakeInit.prototype.init = function(direction) {
	this.currentDirection = direction;
	let snakeBlock = document.createElement('div');

	let snakeHead = document.createElement('div');
	snakeHead.id = 'snakeHead';
	snakeHead.style.backgroundColor = '#f00';

	snakeBlock.appendChild(snakeHead);
	this.dom.main.appendChild(snakeBlock);

	for (let i = 0; i < 3; i++) {
		let snakeBody = document.createElement('div');
		snakeBody.className = 'snakeBody';
		snakeBody.style.left = (i * 40) + 'px';
		snakeBody.style.top = '0px';
		snakeBlock.appendChild(snakeBody);
		this.bodyPosition.push({
			x: i * 40,
			y: 0
		});
	}

	this.move();
};

SnakeInit.prototype.gameOver = function() {
	alert('Game Over! Your score is: ' + this.score);
	location.reload();
};

var snake = new SnakeInit();