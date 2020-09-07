function berechnen(){
    console.log("work")   
    let nettoBrutto = document.getElementById("NettozuBrutto")
    let bruttoNetto = document.getElementById("BruttozuNetto")
    let nettoVerseBrutto;
    let betrag = Number(document.getElementById("eingabeEuro").value)
    
    let mwst;
    let mwst19 = document.getElementById("19")
    let mwst7 = document.getElementById("7")
    let mwstBetrag;
    let ergebnis;
    
    console.log(nettoVerseBrutto)
    console.log(betrag)
    

    if (mwst19.checked == true){
        mwst = 1.19
    } 
    else if (mwst7.checked == true){
        mwst = 1.07
    }
    console.log(mwst)


    if(nettoBrutto.checked == true){
        ergebnis = (betrag * mwst).toFixed(2);
        mwstBetrag = (ergebnis - betrag).toFixed(2)

        document.getElementById("ausgabeMwst").innerHTML = mwstBetrag;
        document.getElementById("ausgabeEndpreis").innerHTML = ergebnis;
    }
    
    else{
        ergebnis = (betrag / mwst).toFixed(2)
        // console.log(ergebnis)   
        document.getElementById("ausgabeEndpreis").innerHTML = ergebnis;
        
        mwstBetrag = (betrag - ergebnis).toFixed(2)
        document.getElementById("ausgabeMwst").innerHTML = mwstBetrag;    

    }
    

    
}