$("/html/body") {
	#adding mwMovie id
	attribute("id", "mwMovie")

	#remove footer
	$$(".footer") {
		remove()
	}

	#remove critics reviews 
	$$(".critics_reviews") {
		remove()
	}

	#remove audience reviews
	$$(".audience_reviews") {
		remove()
	}

	#remove elements from the right 
	$("//div[contains(@class, 'unit') and contains(@class, 'size3of10')]/div[@class='box'][2]") {
		remove()
	}
	$("//div[contains(@class, 'unit') and contains(@class, 'size3of10')]/div[@class='box'][2]") {
		remove()
	}
	
	#moving videos up
	$("//div[contains(@class, 'unit') and contains(@class, 'size3of10')]/div[contains(@class,'box')][2]") {
		add_class("videos")
	}
	$$(".videos") {
		move_to("//div[contains(@class,'size7of10')]", "before")

		$$("li") {
			attribute("class", "videoBlock")
			$("//a[@class='videolink']//img") {
				attribute("width", "")
				attribute("height", "")
			}
		}
	}
}