import GenBtn from "../GenBtn/GenBtn";

const AllGensBtns = () => {
    return (  
        <div className="genBtns flex flex-wrap justify-center gap-3">
            <GenBtn text="Gen 1" offset="" limit="151"/>
            <GenBtn text="Gen 2" offset="offset=151&" limit="100"/>
            <GenBtn text="Gen 3" offset="offset=251&" limit="135"/>
            <GenBtn text="Gen 4" offset="offset=386&" limit="107"/>
            <GenBtn text="Gen 5" offset="offset=493&" limit="156"/>
            <GenBtn text="Gen 6" offset="offset=649&" limit="72"/>
            <GenBtn text="Gen 7" offset="offset=721&" limit="88"/>
            <GenBtn text="Gen 8" offset="offset=809&" limit="96"/>
            <GenBtn text="Gen 9" offset="offset=905&" limit="120"/>
        </div>
    );
}

export default AllGensBtns;