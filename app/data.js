const hyphenate = require('./hyphenate');
module.exports = {
	slides: [
		{
			titleId: "01",
			type: "main",
			title: "Главная",
			anchor: "slide01",
			color: "white",
			active: true
		},
		{
			titleId: "02",
			type: "main",
			title: "О нас",
			color: "black",
			anchor: "slide02"
		},
		{
			titleId: "03",
			type: "main",
			title: "Награды",
			color: "white",
			anchor: "slide03"
		},
		{
			titleId: "04",
			type: "main",
			color: "black",
			title: "Форматы",
			anchor: "slide04-1"
		},
		{
			titleId: null,
			type: "sub",
			color: "black",
			title: "Форматы",
			anchor: "slide04-2"
		},
		{
			titleId: null,
			type: "sub",
			color: "black",
			title: "Форматы",
			anchor: "slide04-3"
		},
		{
			titleId: "05",
			type: "main",
			color: "white",
			title: "Инструменты",
			anchor: "slide05"
		},
		{
			titleId: "06",
			color: "black",
			type: "main",
			title: "ATD",
			anchor: "slide06"
		},
		{
			titleId: "07",
			type: "main",
			color: "white",
			title: "Клиенты",
			anchor: "slide07"
		},
		{
			titleId: "08",
			type: "main",
			color: "white",
			title: "Контакты",
			anchor: "slide08"
		}
	],
	clients: [
		{
			name: "Эстетика",
			link: "http://www.estetica.ru",
			image: "./assets/clients/estetica.png"
		},
		{
			name: "Bayer",
			link: "https://www.bayer.com/",
			image: "./assets/clients/bayer.png"
		},
		{
			name: "Финам",
			link: "http://forex.finam.ru",
			image: "./assets/clients/finam.png"
		},
		{
			name: "Bosch",
			link: "http://www.bosch-home.ru",
			image: "./assets/clients/Bosch.png"
		},
		{
			name: "Brabantia",
			link: "https://www.brabantia-shop.ru",
			image: "./assets/clients/brabantia.png"
		},
		{
			name: "Button Blue",
			link: "https://www.button-blue.com",
			image: "./assets/clients/buttonblue.png"
		},
		{
			name: "Ситилинк",
			link: "https://www.citilink.ru",
			image: "./assets/clients/sitilink.png"
		},
		{
			name: "Крокус сити холл",
			link: "http://crocuscitymall.ru",
			image: "./assets/clients/krokus.png "
		},
		{
			name: "Datsun",
			link: "https://www.datsun.ru",
			image: "./assets/clients/datsun.png"
		},
		{
			name: "Dunlop",
			link: "http://wm02.dunlop-tire.ru",
			image: "./assets/clients/dunlop.png"
		},
		{
			name: "жк рассказоvо",
			link: "http://www.sz-rasskazovo.ru",
			image: "./assets/clients/rasskazovo.svg"
		},
		{
			name: "Элевит Пронаталь",
			link: "https://www.elevite.ru",
			image: "./assets/clients/elevit.svg"
		},
		{
			name: "Ford",
			link: "http://www.ford.ru",
			image: "./assets/clients/ford.png"
		},
		// {
		// 	name: "GLO",
		// 	link: "https://www.myglo.ru",
		// 	image: "./assets/clients/glo.png"
		// },

		{
			name: "nissan",
			link: "https://www.nissan.ru/",
			image: "./assets/clients/nissan.png"
		},
		{
			name: "GoAnalitics",
			link: "http://www.goanalytics.ru",
			image: "./assets/clients/goa-logo.png"
		},
		{
			name: "Hankook",
			link: "http://www.hankooktire.com",
			image: "./assets/clients/Hankook.png"
		},
		{
			name: "Heinz",
			link: "http://heinz-baby.ru",
			image: "./assets/clients/heinz_logo.png"
		},
		{
			name: "Henkel",
			link: "https://got2b.promo.schwarzkopf.ru",
			image: "./assets/clients/2000px-Henkel-Logo.svg.png"
		},
		{
			name: "Hochland",
			link: "http://hochland.ru",
			image: "./assets/clients/hoch-land-9.png"
		},
		{
			name: "HP",
			link: "http://www8.hp.com/ru/ru/home.html",
			image: "./assets/clients/2000px-HP_logo_2012.svg.png"
		},
		{
			name: "Hyundai",
			link: "http://www.hyundai.ru/NewSolaris",
			image: "./assets/clients/Hyundai_logo.png"
		},
		{
			name: "Infiniti",
			link: "https://www.infiniti.ru/",
			image: "./assets/clients/infiniti.png"
		},
		{
			name: "Lexus",
			link: "http://www.lexus.ru",
			image: "./assets/clients/Lexus_logo.png"
		},
		{
			name: "Лада",
			link: "http://www.lada.ru/cars/vesta/sedan",
			image: "./assets/clients/lada.png"
		},
		{
			name: "lg",
			link: "http://www.lg.com/ru",
			image: "./assets/clients/lg.png"
		},
		{
			name: "libero_logo",
			link: "https://libero.promo/",
			image: "./assets/clients/libero_logo.png"
		},
		{
			name: "lukoil",
			link: "http://www.lukoil.ru/",
			image: "./assets/clients/lukoil.png"
		},
		{
			name: "logo-mcdonalds",
			link: "https://mcdonalds.ru/",
			image: "./assets/clients/logo-mcdonalds.png"
		},
		{
			name: "logo-megafon",
			link: "https://megafon.domru.ru/nsk",
			image: "./assets/clients/logo-megafon.png"
		},
		{
			name: "crizal-logo",
			link: "https://crizal.ru/",
			image: "./assets/clients/crizal-logo.png"
		},
		{
			name: "mediaMarkt",
			link: "https://www.mediamarkt.ru/",
			image: "./assets/clients/mediaMarkt.svg"
		},
		{
			name: "logo-yves-rocher",
			link: "https://www.yves-rocher.ru/",
			image: "./assets/clients/logo-yves-rocher.svg"
		},
		// {
		// 	name: "rush",
		// 	link: "https://cyberleague.adrenalinerush.ru/",
		// 	image: "./assets/clients/rush.png"
		// },
		{
			name: "logo-agusha",
			link: "https://agulife.ru/",
			image: "./assets/clients/logo-agusha.png"
		},
		{
			name: "lipton_logo_bw",
			link: "https://www.lipton.com/ru/home.html",
			image: "./assets/clients/lipton_logo_bw.png"
		},
		{
			name: "renault",
			link: "https://www.renault.ru/",
			image: "./assets/clients/renault.png"
		},
		{
			name: "qiwi",
			link: "https://qiwi.com/",
			image: "./assets/clients/qiwi.png"
		},
		{
			name: "mitsubishi",
			link: "https://www.mitsubishi.ru/",
			image: "./assets/clients/mitsubishi.png"
		}
	],
	tools: [
		{
			name: "Динамические креативы",
			description:
				hyphenate("Персонализированные баннеры для каждой группы целевой аудитории, меняющиеся в зависимости от их поведения и/или предпочтений.")
		},
		{
			name: "Кастомные сегменты",
			description:
				hyphenate("Построение уникальных и специфических сегментов аудитории под конкретного рекламодателя / рекламную кампанию / продукт.")
		},
		{
			name: "Контекстный таргетинг",
			description:
				hyphenate("Работает с контекстом окружения рекламного места на основе анализа семантики страницы. Демонстрация креативов происходит на площадках, где встречаются заранее подобранные ключевые слова.")
		},
		{
			name: "Brand Safety",
			description:
				hyphenate("Защита бренда и его рекламных материалов от неблагоприятного информационного окружения.")
		},
		{
			name: "Ретаргетинг",
			description:
				hyphenate("Персонализированное обращение через баннеры к пользователям, которые уже просмотрели рекламируемый продукт, посетив сайт рекламодателя.")
		},
		{
			name: "Look-alike",
			description:
				hyphenate("Таргетинг, благодаря которому товар или услугу предлагают пользователям, по многим показателям похожим на существующих клиентов рекламодателя.")
		},
		{
			name: "Статистика Real-time",
			description:
				hyphenate("Доступ к статистике рекламной кампании в режиме реального времени.")
		},
		{
			name: "Оптимизация по CPM, CPC, CPA, CPS",
			description:
				hyphenate("Оптимизация рекламной кампании на достижение заданных рекламодателем показателей – стоимость сеанса, стоимость целевого действия и др.")
		},
		{
			name: "TV Sync",
			description:
				hyphenate("Технология единовременной и ситуативной синхронизации интернет-рекламы с событиями на TV, выходом собственного или конкурирующего ролика.")
		},
		{
			name: "Brand lift",
			description:
				hyphenate("Оценка уровня влияния интернет рекламы на рост узнаваемости или лояльности к бренду.")
		}
	],
	projects: [
		{
			id: "nissan",
			name: "Nissan Murano",
			image: "./assets/cases/murano.jpg",
			images: ["./assets/cases/murano1.jpg", "./assets/cases/murano2.jpg"]
		},
		{
			id: "infiniti",
			name: "Infiniti",
			image: "./assets/cases/infiniti.jpg",
			images: [
				"./assets/cases/infiniti1.jpg",
				"./assets/cases/infiniti2.jpg",
				"./assets/cases/infiniti3.jpg"
			]
		},
		{
			id: "imho",
			name: "IMHO",
			image: "./assets/cases/imho.jpg",
			images: ["./assets/cases/imho1.jpg"]
		},
		{
			id: "ar",
			name: "Adrenalin Rush",
			image: "./assets/cases/adrenaline.jpg",
			images: ["./assets/cases/adrenaline1.jpg"]
		}
	]
};
