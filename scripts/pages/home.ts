$$("body") {
  add_class("_home")

  # Provide the Xpath of the container you'd keep if this page were ajax'ed.
  # mtv_ajaxify(%xpath)

$("//script[@src='//connect.facebook.net/en_US/all.js']"){
	remove()
}

$$("#container"){
	remove()
}

$("//header"){
	move_to("../../..",position("top"))
}

$("//div[contains(@class,'unit')]/div"){
	attribute("data-ur-carousel-component","item")
}

$("//div[contains(@class,'unit')]/div[1]"){
		move_to("//div[@class='line']")
	}
$("//div[contains(@class,'unit')]/div[1]"){
		move_to("//div[@class='line']")
	}

$("//div[contains(@class,'unit')]"){
	remove()
}

$("//div[@class='line']"){
		attributes(id:'carousel-container',data-ur-set:"carousel",data-ur-carousel-component:"view_container",data-ur-id: "homeCarousel",data-ur-infinite:"disabled", data-ur-autoscroll: "enabled",data-ur-autoscroll-delay: "3500")
	inner_wrap("div"){
		attributes(id:"carousel-wrapper",data-ur-carousel-component:"scroll_container")
	}
}

$("//div[@class='line']"){
	insert("div", ""){
		attributes(id:'prev',data-ur-carousel-component:'button',data-ur-carousel-button-type:"prev")
		inject("<img/>"){
			attribute("src",asset("images/carousel-prev.png"))
		}

		
	}
	insert("div", ""){
		attributes(id:'next',data-ur-carousel-component:'button',data-ur-carousel-button-type:"next")
		inject("<img/>"){
			attribute("src",asset("images/carousel-next.png"))
		}
	}
}

$$(".icon.tiny.fresh"){
	attribute("class","icon huge fresh")
} 

$$(".icon.tiny.rotten"){
	attribute("class","icon huge rotten")
} 


}