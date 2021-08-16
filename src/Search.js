export default function Search() {


    const successCallback = (position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=c5fd867675514a4cb53070615d64f96f`).then(res => res.json()).then(result => {
            let city = document.querySelector('.city');
            city.innerHTML = result.results[0].components.city

            let state = document.querySelector('.state');
            state.innerHTML = result.results[0].components.state;
        })
    };
    const errorCallback = (error) => {
        console.log(error);

    }

    { navigator.geolocation.getCurrentPosition(successCallback, errorCallback) }

    return (
        <div>
            <div className='search'>
                <input
                    type='text'
                    placeholder='Search...'
                    className='search-bar w-full rounded-md shadow-md px-3 py-1 my-3 cursor-pointer hover:bg-gray-200'

                />
                <div className="text-2xl text-gray-800 font-semi-bold mt-4">

                    <h2 className='city'></h2>
                    <h3 className='state'></h3>
                </div>
            </div>

        </div>
    )
}
