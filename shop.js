// JavaScript Document	
window.onload = display;


function display()
{
	var order = "";
	var book = 0;
	var DP02 = 0;
	var	kShirt = 0;
	var	aShirt = 0; 
	var	sticker = 0; 
	var	print = 0;
	var	booster = 0;
	var cartContent = book + DP02 + kShirt + aShirt + sticker + print + booster;
	var cartTotal = 0;
	
	cartContent = book + DP02 + kShirt + aShirt + sticker + print + booster;
	document.getElementById('Cart').innerHTML="Total: $" + cartTotal + " +shipping";
	document.getElementById('CartContent').innerHTML="Items in cart: " +cartContent;
	document.getElementById('Cart2').innerHTML="Total: $" + cartTotal + " +shipping";
	document.getElementById('CartContent2').innerHTML="Items in cart: " +cartContent;
	document.getElementById('boosterAmount').innerHTML="Packs in cart: " +booster;
	document.getElementById('stickerAmount').innerHTML="stickers in cart: " +sticker;
	document.getElementById('shirtAmount').innerHTML="shirts in cart: " +(kShirt + aShirt);
	document.getElementById('bookAmount').innerHTML="books in cart: " +book;
	document.getElementById('DP02Amount').innerHTML="books in cart: " +DP02;
	document.getElementById('printAmount').innerHTML="prints in cart: " +print;
	
	function displayUpdate()
	{
	cartContent = book + DP02 + kShirt + aShirt + sticker + print + booster;
	document.getElementById('Cart').innerHTML="Total: $" + cartTotal + " +shipping";
	document.getElementById('CartContent').innerHTML="Items in cart: " +cartContent;
	document.getElementById('Cart2').innerHTML="Total: $" + cartTotal + " +shipping";
	document.getElementById('CartContent2').innerHTML="Items in cart: " +cartContent;
	document.getElementById('boosterAmount').innerHTML="Packs in cart: " +booster;
	document.getElementById('stickerAmount').innerHTML="stickers in cart: " +sticker;
	document.getElementById('shirtAmount').innerHTML="shirts in cart: " +(kShirt + aShirt);
	document.getElementById('bookAmount').innerHTML="books in cart: " +book;
	document.getElementById('DP02Amount').innerHTML="books in cart: " +DP02;
	document.getElementById('printAmount').innerHTML="prints in cart: " +print;
	}
	
	function artNumBtn()
	{
		document.getElementById("ArtNumbers").style.display = "block"; document.getElementById("ArtNumButtonDiv").style.display = "none"
	}
	document.getElementById("ArtNumButton").onclick = artNumBtn;
	
	
	function collapseBtn()
	{
		document.getElementById('ArtNumButtonDiv').style.display = "block"; 
		document.getElementById('ArtNumbers').style.display = "none";
	}
	document.getElementById("topCollapseBtn").onclick = collapseBtn;
	document.getElementById("bottomCollapseBtn").onclick = collapseBtn;
	
	
	function orderPrintBtn()
	{
		document.getElementById('PrintArt').style.display = 'block'; 
		document.getElementById('OrderPrint').style.display = 'none';
	}document.getElementById("orderPrintBtn").onclick = orderPrintBtn;
	
	function printArtBtn()
	{
		document.getElementById('OrderPrint').style.display = 'block';
		document.getElementById('PrintArt').style.display = 'none'; 
		print++; 
		cartTotal += 2; 
		order =' print ' + document.getElementById('printArtNum').value + ';' + order; document.getElementById('removePrint').style.display = 'block'; 
		displayUpdate();
	}document.getElementById("printArtBtn").onclick = printArtBtn;
	
	function removePrintBtn()
	{
		if(print>=1)
		{
			print--; 
			cartTotal -= 2; 
			order = order.replace(/ print....../, ''); 
			displayUpdate();
		} 
		if(print<=0)
		{
			document.getElementById('removePrint').style.display = 'none';
		} 
	}document.getElementById("removePrintBtn").onclick = removePrintBtn;
	
	function bookBtn()
	{
		document.getElementById('removeBook').style.display = 'block';
		book++; 
		cartTotal += 10; 
		order =' book;' + order; 
		displayUpdate();
	}document.getElementById("bookBtn").onclick = bookBtn;
	
	function removeBookBtn()
	{
		if(book>=1)
		{
			book--; 
			cartTotal -= 10; 
			order = order.replace(' book;', ''); 
			displayUpdate();
		} 
		if(book<=0)
		{
			document.getElementById('removeBook').style.display = 'none';
		}
	}document.getElementById("removeBookBtn").onclick = removeBookBtn;
	
	function DP02Btn()
	{
		document.getElementById('removeDP02').style.display = 'block';
		DP02++; 
		cartTotal += 10; 
		order =' DP02;' + order; 
		displayUpdate();
	}document.getElementById("DP02Btn").onclick = DP02Btn;
	
	function removeDP02Btn()
	{
		if(DP02>=1)
		{
			DP02--; 
			cartTotal -= 10; 
			order = order.replace(' DP02;', ''); 
			displayUpdate();
		} 
		if(DP02<=0)
		{
			document.getElementById('removeDP02').style.display = 'none';
		}
	}document.getElementById("removeDP02Btn").onclick = removeDP02Btn;
	
	function orderShirtBtn()
	{
		document.getElementById('ShirtArt').style.display = 'block';
		document.getElementById('OrderShirt').style.display = 'none';
	}document.getElementById("orderShirtBtn").onclick = orderShirtBtn;
	
	function shirtNextBtn()
	{
		document.getElementById('ShirtSize').style.display = 'block';
		document.getElementById('ShirtArt').style.display = 'none';
	}document.getElementById("shirtNextBtn").onclick = shirtNextBtn;
	
	function shirtSize()
	{
		document.getElementById('OrderShirt').style.display = 'block'; 
		document.getElementById('ShirtSize').style.display = 'none';
		if	(document.getElementById('shirtSize').value == '2t' || document.getElementById('shirtSize').value == '3t' || document.getElementById('shirtSize').value == '4t' || document.getElementById('shirtSize').value == 'ks' || document.getElementById('shirtSize').value == 'km' || document.getElementById('shirtSize').value == 'kl')
		{
			kShirt++; 
			cartTotal += 15; 
			document.getElementById('removeKid').style.display='block';
			order =' kShirt ' + document.getElementById('shirtArtNum').value +' '+ document.getElementById('shirtSize').value + ';' + order;
			displayUpdate();
		} else
		{
			aShirt++;
			cartTotal+= 20;
			document.getElementById('removeAdult').style.display='block';
			order =' aShirt ' + document.getElementById('shirtArtNum').value +' '+ document.getElementById('shirtSize').value +';' + order;
			displayUpdate();
		} 	
	}document.getElementById("shirtSizeBtn").onclick = shirtSize;
	
	function removeAdultBtn()
	{
		if(aShirt>=1)
		{
			aShirt--;
			cartTotal -= 20; 
			order = order.replace(/ aShirt........./, ''); 
			displayUpdate();
		} 
		if(aShirt<=0)
		{
			document.getElementById('removeAdult').style.display = 'none';
		}
	}document.getElementById("removeAdultBtn").onclick = removeAdultBtn;
	
	function removeKidBtn()
	{
		if(kShirt>=1)
		{
			kShirt--;
			cartTotal -= 15; 
			order = order.replace(/ kShirt........./, ''); 
			displayUpdate();
		} 
		if(kShirt<=0)
		{
			document.getElementById('removeKid').style.display = 'none';
		}
	}document.getElementById("removeKidBtn").onclick = removeKidBtn;
	
	function orderStickerBtn()
	{
		document.getElementById('StickerArt').style.display = 'block';
		document.getElementById('OrderSticker').style.display = 'none';
	}document.getElementById("orderStickerBtn").onclick = orderStickerBtn;
	
		function stickerArtBtn()
	{
		document.getElementById('OrderSticker').style.display = 'block';
		document.getElementById('removeSticker').style.display = 'block';
		document.getElementById('StickerArt').style.display = 'none';
		sticker++; 
		cartTotal += 1; 
		order =' sticker ' + document.getElementById('stickerArtNum').value + ';' + order; 
		displayUpdate();
	}document.getElementById("stickerArtBtn").onclick = stickerArtBtn;
	
	function removeStickerBtn()
	{
		if(sticker>=1)
		{
			sticker--; 
			cartTotal -= 1; 
			order = order.replace(/ sticker....../, ''); 
			displayUpdate();
		} 
		if(sticker<=0)
		{
			document.getElementById('removeSticker').style.display = 'none';
		} 
	}document.getElementById("removeStickerBtn").onclick = removeStickerBtn;
	
	function boosterBtn()
	{
		document.getElementById('removeBooster').style.display = 'block';
		booster++;
		cartTotal += 3;
		order =' booster;' +  order;
		displayUpdate();
	}document.getElementById("boosterBtn").onclick = boosterBtn;
	
	function removeBoosterBtn()
	{
		if(booster>=1)
		{
			booster--; 
			cartTotal -= 3; 
			order = order.replace(' booster;', ''); 
			displayUpdate();
		} 
		if(booster<=0)
		{
			document.getElementById('removeBooster').style.display = 'none';
		}
	}document.getElementById("removeBoosterBtn").onclick = removeBoosterBtn;
	
	function submit()
	{
		document.getElementById('entry.579895398').value=order;
		document.getElementById('hidden-div').style.display = 'block';
		document.getElementById("submit").style.display = 'none';
	}document.getElementById("submit").onclick = submit;
	
}




