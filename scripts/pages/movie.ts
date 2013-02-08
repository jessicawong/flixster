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

	$("//i[contains(@class, 'popcorn')]") {
		attribute("class", "icon huge popcorn img mrs")
	}

	$("//i[contains(@class, 'rotten')]") {
		attribute("class", "icon huge rotten img mrs")
	}

	$("//div[contains(@class,'box')]/div[contains(@class,'media')]//p[2]") {
		remove()
	}

	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[2]/div/div/div/ul/li[1]") {
		attribute("style", "width:50%; color:#FF5C00")
	}
	
	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[2]/div/div/div/ul/li[2]") {
		attribute("style", "width:50%; color:#FF5C00")
	}

	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[2]/div/div/div/ul/li[1]/p/span[2]") {
		attribute("class", "medium")
	}

	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[2]/div/div/div/ul/li[2]/p/span[2]") {
		attribute("class", "medium")
	}

	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[3]/div/h3") {
		remove()
	}

	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[3]/div/a") {
		remove()
	}

	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[3]/div/div[1]") {
		attribute("class", "medium")
		add_class("stdef")
	}

	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[2]/div/div/div/div") {
		add_class("desCredits")
	}

	$("//*[@id='mwMovie']/div[2]/div[2]/div[1]/div[3]/div/p/a") {
		add_class("desCredits")
	}
}