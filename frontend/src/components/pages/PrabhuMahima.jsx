import React from "react";
import Header from "../HomeComponents/Header";
import Footer from "../HomeComponents/Footer";


const PrabhuMahima = () => {
  return (
    // <div>
    //  
    //   <div className="bg-background text-primary-foreground min-h-screen p-8">
    //     <div className="max-w-3xl mx-auto  ">
    //       <div className="mb-12 container bg-card dark:bg-card-foreground rounded-lg p-6 shadow-md">
    //         <h2 className="text-5xl font-extrabold mb-4 text-accent">
    //           श्री विश्वकर्मा भगवान
    //         </h2>
    //         <p className="text-lg text-muted-foreground">
    //           हम अपने प्राचीन ग्रंथो उपनिषद एवं पुराण आदि का अवलोकन करें तो
    //           पायेगें कि आदि काल से ही विश्वकर्मा शिल्पी अपने विशिष्ट ज्ञान एवं
    //           विज्ञान के कारण ही न मात्र मानवों अपितु देवगणों द्वारा भी पूजित और
    //           वंदित है । भगवान विश्वकर्मा के आविष्कार एवं निर्माण कोर्यों के
    //           सन्दर्भ में इन्द्रपुरी, यमपुरी, वरुणपुरी, कुबेरपुरी, पाण्डवपुरी,
    //           सुदामापुरी, शिवमण्डलपुरी आदि का निर्माण इनके द्वारा किया गया है ।
    //           पुष्पक विमान का निर्माण तथा सभी देवों के भवन और उनके दैनिक उपयोगी
    //           होनेवाले वस्तुएं भी इनके द्वारा ही बनाया गया है । कर्ण का कुण्डल,
    //           विष्णु भगवान का सुदर्शन चक्र, शंकर भगवान का त्रिशुल और यमराज का
    //           कालदण्ड इत्यादि वस्तुओं का निर्माण भगवान विश्वकर्मा ने ही किया है
    //           । भगवान विश्वकर्मा ने ब्रम्हाजी की उत्पत्ति करके उन्हे प्राणीमात्र
    //           का सृजन करने का वरदान दिया और उनके द्वारा 84 लाख योनियों को
    //           उत्पन्न किया । श्री विष्णु भगवान की उत्पत्ति कर उन्हे जगत में
    //           उत्पन्न सभी प्राणियों की रक्षा और भगण-पोषण का कार्य सौप दिया ।
    //           प्रजा का ठीक सुचारु रुप से पालन और हुकुमत करने के लिये एक अत्यंत
    //           शक्तिशाली तिव्रगामी सुदर्शन चक्र प्रदान किया । बाद में संसार के
    //           प्रलय के लिये एक अत्यंत दयालु बाबा भोलेनाथ श्री शंकर भगवान की
    //           उत्पत्ति की । उन्हे डमरु, कमण्डल, त्रिशुल आदि प्रदान कर उनके ललाट
    //           पर प्रलयकारी तिसरा नेत्र भी प्रदान कर उन्हे प्रलय की शक्ति देकर
    //           शक्तिशाली बनाया । यथानुसार इनके साथ इनकी देवियां खजाने की अधिपति
    //           माँ लक्ष्मी, राग-रागिनी वाली वीणावादिनी माँ सरस्वती और माँ गौरी को
    //           देकर देंवों को सुशोभित किया ।<br />
    //           हमारे धर्मशास्त्रो और ग्रथों में विश्वकर्मा के पाँच स्वरुपों और
    //           अवतारों का वर्णन प्राप्त होता है ।<br />
    //           • विराट विश्वकर्मा - सृष्टि के रचेता
    //           <br />
    //           • धर्मवंशी विश्वकर्मा - महान शिल्प विज्ञान विधाता प्रभात पुत्र
    //           <br />
    //           • अंगिरावंशी विश्वकर्मा - आदि विज्ञान विधाता वसु पुत्र
    //           <br />
    //           • सुधन्वा विश्वकर्म - महान शिल्पाचार्य विज्ञान जन्मदाता ऋशि अथवी
    //           के पात्र
    //           <br />
    //           • भृंगुवंशी विश्वकर्मा - उत्कृष्ट शिल्प विज्ञानाचार्य (शुक्राचार्य
    //           के पौत्र )<br />
    //           देवगुरु बृहस्पति की भगिनी भुवना के पुत्र भौवन विश्वकर्मा की वंश
    //           परम्परा अत्यंत वृध्द है।सृष्टि के वृध्दि करने हेतु भगवान पंचमुख
    //           विष्वकर्मा के सघोजात नामवाले पूर्व मुख से सामना दूसरे वामदेव नामक
    //           दक्षिण मुख से सनातन, अघोर नामक पश्चिम मुख से अहिंमून, चौथे
    //           तत्पुरुष नामवाले उत्तर मुख से प्रत्न और पाँचवे ईशान नामक मध्य
    //           भागवाले मुख से सुपर्णा की उत्पत्ति शास्त्रो में वर्णित है। इन्ही
    //           सानग, सनातन, अहमन, प्रत्न और सुपर्ण नामक पाँच गोत्र प्रवर्तक
    //           ऋषियों से प्रत्येक के पच्चीस-पच्चीस सन्ताने उत्पन्न हुई जिससे
    //           विशाल विश्वकर्मा समाज का विस्तार हुआ है ।<br />
    //           शिल्पशास्त्रो के प्रणेता बने स्वंय भगवान विश्वकर्मा जो ऋषशि रुप
    //           में उपरोक्त सभी ज्ञानों का भण्डार है, शिल्पो कें आचार्य शिल्पी
    //           प्रजापति ने पदार्थ के आधार पर शिल्प विज्ञान को पाँच प्रमुख धाराओं
    //           में विभाजित करते हुए तथा मानव समाज को इनके ज्ञान से लाभान्वित करने
    //           के निर्मित पाणच प्रमुख शिल्पायार्च पुत्र को उत्पन्न किया जो अयस
    //           ,काष्ट, ताम्र, शिला एंव हिरण्य शिल्प के अधिषश्ठाता मनु, मय,
    //           त्वष्ठा, शिल्पी एंव दैवज्ञा के रुप में जाने गये । ये सभी ऋषि वेंदो
    //           में पारंगत थे ।<br />
    //           कन्दपुराण के नागर खण्ड में भगवान विश्वकर्मा के वशंजों की चर्चा की
    //           गई है । ब्रम्ह स्वरुप विराट श्री.विश्वकर्मा पंचमुख है । उनके पाँच
    //           मुख है जो पुर्व, पश्चिम, उत्तर, दक्षिण और ऋषियों को मत्रों व्दारा
    //           उत्पन्न किये है । उनके नाम है – मनु, मय, त्वष्टा, शिल्पी और देवज्ञ
    //           ।<br />
    //           • ऋषि मनु विष्वकर्मा - ये "सानग गोत्र" के कहे जाते है । ये लोहे के
    //           कर्म के उध्दगाता है ।इनके वशंज लोहकार के रुप मे जानें जाते है ।
    //           <br />
    //           • सनातन ऋषि मय - ये सनातन गोत्र कें कहें जाते है । ये बढई के कर्म
    //           के उद्धगाता है। इनके वंशंज काष्टकार के रुप में जाने जाते है।
    //           <br />
    //           • अहभून ऋषि त्वष्ठा - इनका दूसरा नाम त्वष्ठा है जिनका गोत्र अहंभन
    //           है । इनके वंशज ताम्रक के रूप में जाने जाते है <br />
    //           • प्रयत्न ऋषि शिल्पी - इनका दूसरा नाम शिल्पी है जिनका गोत्र
    //           प्रयत्न है । इनके वशंज शिल्पकला के अधिष्ठाता है और इनके वंशज
    //           संगतराश भी कहलाते है इन्हें मुर्तिकार भी कहते हैं <br />
    //           • देवज्ञ ऋषि - इनका गोत्र है सुर्पण । इनके वशंज स्वर्णकार के रूप
    //           में जाने जाते हैं । ये रजत,स्वर्ण धातु के शिल्पकर्म करते है, ।
    //           <br />
    //           परमेश्वर विश्वकर्मा के ये पाँच पुत्रं, मनु, मय, त्वष्ठा, शिल्पी और
    //           देवज्ञ शस्त्रादिक निर्माण करके संसार करते है । लोकहित के लिये
    //           अनेकानेक पदार्थ को उत्पन्न करते वाले तथा घर ,मंदिर एवं भवन,
    //           मुर्तिया आदि को बनाने वाले तथा अलंकारों की रचना करने वाले है ।
    //           इनकी सारी रचनाये लोकहितकारणी हैं । इसलिए ये पाँचो एवं वन्दनीय
    //           ब्राम्हण है और यज्ञ कर्म करने वाले है । इनके बिना कोई भी यज्ञ नहीं
    //           हो सकता । मनु ऋषि ये भगनान विश्वकर्मा के सबसे बडे पुत्र थे । इनका
    //           विवाह अंगिरा ऋषि की कन्या कंचना के साथ हुआ था इन्होने मानव सृष्टि
    //           का निर्माण किया है । इनके कुल में अग्निगर्भ, सर्वतोमुख, ब्रम्ह आदि
    //           ऋषि उत्पन्न हुये है । भगवान विश्वकर्मा के दुसरे पुत्र मय महर्षि थे
    //           । इनका विवाह परासर ऋषि की कन्या सौम्या देवी के साथ हुआ था ।
    //           इन्होने इन्द्रजाल सृष्टि की रचना किया है । इनके कुल में
    //           विष्णुवर्धन, सूर्यतन्त्री, तंखपान, ओज, महोज इत्यादि महर्षि पैदा
    //           हुए है । भगवान विश्वकर्मा के तिसरे पुत्र महर्षि त्वष्ठा थे । इनका
    //           विवाह कौषिक ऋषि की कन्या जयन्ती के साथ हुआ था । इनके कुल में लोक
    //           त्वष्ठा, तन्तु, वर्धन, हिरण्यगर्भ शुल्पी अमलायन ऋषि उत्पन्न हुये
    //           है । वे देवताओं में पूजित ऋषि थे । भगवान विश्वकर्मा के चौथे महर्षि
    //           शिल्पी पुत्र थे । इनका विवाह भृगु ऋषि की करूणाके साथ हुआ था । इनके
    //           कुल में बृध्दि, ध्रुन, हरितावश्व, मेधवाह नल, वस्तोष्यति, शवमुन्यु
    //           आदि ऋषि हुये है । इनकी कलाओं का वर्णन मानव जाति क्या देवगण भी नहीं
    //           कर पाये है । भगवान विश्वकर्मा के पाँचवे पुत्र महर्षि दैवज्ञ थे ।
    //           इनका विवाह जैमिनी ऋषि की कन्या चन्र्दिका के साथ हुआ था । इनके कुल
    //           में सहस्त्रातु, हिरण्यम, सूर्यगोविन्द, लोकबान्धव, अर्कषली इत्यादी
    //           ऋषि हुये । इन पाँच पुत्रो के अपनी छीनी, हथौडी और अपनी उँगलीयों से
    //           निर्मित कलाये दर्शको को चकित कर देती है । उन्होन् अपने वशंजो को
    //           कार्य सौप कर अपनी कलाओं को सारे संसार मे फैलाया और आदि युग से आजलक
    //           अपने-अपने कार्य को सभालते चले आ रहे है ।
    //         </p>
    //       </div>
    //       <div className="mb-12">
    //         <h2 className="text-5xl font-extrabold mb-4 text-accent">
    //         	श्री विश्वकर्मा वंशावली
    //         </h2>
    //         <p className="text-lg text-muted-foreground">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //         </p>
    //       </div>
    //       <div className="mb-12">
    //         <h2 className="text-5xl font-extrabold mb-4 text-accent">
    //           Our Values
    //         </h2>
    //         <ul className="list-disc pl-4 text-muted-foreground">
    //           <li className="mb-2 flex items-center">
    //             <span className="text-yellow-500">🌟</span> Compassion
    //           </li>
    //           <li className="mb-2 flex items-center">
    //             <span className="text-red-500">💖</span> Empathy
    //           </li>
    //           <li className="mb-2 flex items-center">
    //             <span className="text-blue-500">🚀</span> Dedication
    //           </li>
    //           <li className="mb-2 flex items-center">
    //             <span className="text-green-500">⚖️</span> Equality
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="mb-12">
    //         <h2 className="text-5xl font-extrabold mb-4 text-accent">
    //           Our Impact
    //         </h2>
    //         <p className="text-lg text-muted-foreground">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //         </p>
    //       </div>
    //       <div className="mb-12">
    //         <h2 className="text-5xl font-extrabold mb-4 text-accent">
    //           Get Involved
    //         </h2>
    //         <p className="text-lg text-muted-foreground">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //         </p>
    //         <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg transition duration-300">
    //           Join Us
    //         </button>
    //       </div>
    //     </div>
    //   </div>

     
        <div>
          <Header/>
    
          <div className="flex flex-wrap justify-center items-start gap-6 p-6 bg-background dark:bg-black">
              
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-card dark:bg-card">
                  <img className="w-full h-40 object-cover object-center" src="https://openui.fly.dev/openui/300x200.svg?text=Image+1" alt="Image 1"></img>
                  <div className="p-4">
                      <h3 className="text-lg font-semibold text-primary dark:text-primary-foreground mb-2">Title of Information</h3>
                      <p className="text-sm text-secondary dark:text-secondary-foreground leading-relaxed mb-4">
                          Description of the information. This card provides detailed insights on a particular topic.
                      </p>
                      <button className="bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/80">Read more</button>
                  </div>
              </div>
          
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-card dark:bg-card">
              <img className="w-full h-40 object-cover object-center" src="https://openui.fly.dev/openui/300x200.svg?text=Image+2" alt="Image 2"></img>
              <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary dark:text-primary-foreground mb-2">Another Information Title</h3>
                  <p className="text-sm text-secondary dark:text-secondary-foreground leading-relaxed mb-4">
                      Brief description of another piece of information. Dive deeper by clicking the button below.
                  </p>
                  <button className="bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/80">Read more</button>
              </div>
          </div>
          </div>
           <Footer />
           </div>
          
          
  );
};

export default PrabhuMahima;
