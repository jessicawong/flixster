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
		$$("h3") {
			remove()
		}
	}
	$$(".videos") {
		move_to("//div[contains(@class,'size7of10')]", "before")

		$$("li") {
			attribute("class", "videoBlock")
			$("//a[@class='videolink']//img") {
				attribute("width", "100%")
				attribute("height", "auto")
			}
		}
	}

	#moving title to top
	$("//h1[@class='title']") {
		move_to("//div[@class='main']", "top")
	}
	//*[@id="mwMovie"]/div[2]/div[2]/div[1]/div[2]/div/div/div/p[1]
	$("//div[contains(@class,'movieBox')]") {
		$("div[contains(@class, 'media')]") {
			$("div[@class='bd']") {
				$("ul") {
					add_class("tomatoes")
				}
				$("p[1]") {
					add_class("movieDes")
				}
			}
		}
	}

	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[3]/div/div[2]/a"){
		add_class("orangeButton")
	}
	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[3]/div/div[3]/a"){
		add_class("orangeButton")
	}
}