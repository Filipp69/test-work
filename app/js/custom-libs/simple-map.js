document.addEventListener('DOMContentLoaded', function () {
    let mapItem = document.querySelector('[data-map]');
    if (mapItem) {
        let mapOverlay = mapItem.closest('[data-map-overlay]');

        ymaps.ready(() => {
            initSimpleMap(mapItem);
        });

        if (mapOverlay) {
            mapOverlay.addEventListener('mouseleave', function () {
                this.classList.add('map--no-touch');
            });

            mapOverlay.addEventListener('click', function () {
                this.classList.remove('map--no-touch');
            });
        }
    }
});

function initSimpleMap(mapItem) {
    let mapCoords = mapItem.getAttribute('data-map-coords').split(',');
    let mapIcon = mapItem.getAttribute('data-map-icon');
    let mapIconCaption = mapItem.getAttribute('data-map-icon-caption');
    let mapBalloon = mapItem.getAttribute('data-map-balloon');
    let mapIconContent;
    if (mapIconCaption) {
        mapIconContent = `<div class="map__placemark"><span>${mapIconCaption}</span></div>`;
    }

    let myMap = new ymaps.Map(mapItem, {
        center: mapCoords,
        zoom: 17,
        controls: [],
    });

    let myPlacemark = new ymaps.Placemark(mapCoords, {
        iconContent: mapIconContent,
        balloonContent: mapBalloon
    }, {
        iconLayout: mapIconCaption ? 'default#imageWithContent' : 'default#image',
        iconImageHref: mapIcon,
        iconImageSize: [50, 50],
        iconImageOffset: [-25, -25],
    });
    myMap.geoObjects
        .add(myPlacemark);
}