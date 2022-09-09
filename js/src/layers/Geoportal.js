// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

const L = require('../leaflet.js');
const layer = require('./TileLayer.js');
const control = require('../controls/Control.js');
const utils = require('../utils');

export class LeafletGeoportalWMTSModel extends layer.LeafletTileLayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'LeafletGeoportalWMTSView',
      _model_name: 'LeafletGeoportalWMTSModel',
      layer : 'ORTHOIMAGERY.ORTHOPHOTOS',
      apiKey : 'essentiels',
      format : 'image/jpeg'
    };
  }
}

export class LeafletGeoportalWMTSView extends layer.LeafletTileLayerView {
  create_obj() {
    this.obj = L.geoportalLayer.WMTS({layer : this.model.get('layer'), apiKey : this.model.get('api_key')}, {format : this.model.get('format')})
  }
}

export class LeafletGeoportalLayerSwitcherModel extends control.LeafletControlModel {
  defaults() {
    return {
      ...super.defaults(),
     _view_name: 'LeafletGeoportalLayerSwitcherView',
      _model_name: 'LeafletGeoportalLayerSwitcherModel'
      };
    }
  }

  export class LeafletGeoportalLayerSwitcherView extends control.LeafletControlView {
    initialize(parameters) {
      super.initialize(parameters);
      this.map_view = this.options.map_view;
    }
    create_obj() {
      this.obj = L.geoportalControl.LayerSwitcher()
    }
  }

  export class LeafletGeoportalSearchEngineModel extends control.LeafletControlModel {
    defaults() {
      return {
        ...super.defaults(),
       _view_name: 'LeafletGeoportalSearchEngineView',
        _model_name: 'LeafletGeoportalSearchEngineModel'
        };
      }
    }

    export class LeafletGeoportalSearchEngineView extends control.LeafletControlView {
      initialize(parameters) {
        super.initialize(parameters);
        this.map_view = this.options.map_view;
      }
      create_obj() {
        this.obj = L.geoportalControl.SearchEngine({
                position : "topleft",
                collapsed : true,
                zoomTo : "auto",
                displayInfo : true,
                displayAdvancedSearch : true,
                resources : ["PositionOfInterest", "StreetAddress"],
                advancedSearch : {
                    PositionOfInterest : [{name : "municipality", title : "Ville"}],
                    StreetAddress : [{}],
                    CadastralParcel : null,
                },
                apiKey : "cartes",
                geocodeOptions : {},
                autocompleteOptions : {}
           })
      }
    }

    export class LeafletGeoportalRouteModel extends control.LeafletControlModel {
      defaults() {
        return {
          ...super.defaults(),
         _view_name: 'LeafletGeoportalLayerSwitcherView',
          _model_name: 'LeafletGeoportalLayerSwitcherModel'
          };
        }
      }

      export class LeafletGeoportalRouteView extends control.LeafletControlView {
        initialize(parameters) {
          super.initialize(parameters);
          this.map_view = this.options.map_view;
        }
        create_obj() {
          this.obj = L.geoportalControl.Route({
                  position : "bottomleft",
                  collapsed : true,
                  exclusions : {
                      "toll" : true,
                     "bridge" : false,
                     "tunnel" : true
                  },
                  graphs : ['Pieton', 'Voiture'],
                  autocompleteOptions : {},
                  routeOptions : {}
              })
        }
      }

      export class LeafletGeoportalMousePositionModel extends control.LeafletControlModel {
        defaults() {
          return {
            ...super.defaults(),
           _view_name: 'LeafletGeoportalMousePositionView',
            _model_name: 'LeafletGeoportalMousePositionModel'
            };
          }
        }

        export class LeafletGeoportalMousePositionView extends control.LeafletControlView {
          initialize(parameters) {
            super.initialize(parameters);
            this.map_view = this.options.map_view;
          }
          create_obj() {
            this.obj = L.geoportalControl.MousePosition({})
          }
        }

        export class LeafletGeoportalElevationPathModel extends control.LeafletControlModel {
          defaults() {
            return {
              ...super.defaults(),
             _view_name: 'LeafletGeoportalElevationPathView',
              _model_name: 'LeafletGeoportalElevationPathModel'
              };
            }
          }

          export class LeafletGeoportalElevationPathView extends control.LeafletControlView {
            initialize(parameters) {
              super.initialize(parameters);
              this.map_view = this.options.map_view;
            }
            create_obj() {
              this.obj = L.geoportalControl.ElevationPath({})
            }
          }

          export class LeafletGeoportalIsocurveModel extends control.LeafletControlModel {
            defaults() {
              return {
                ...super.defaults(),
               _view_name: 'LeafletGeoportalIsocurve',
                _model_name: 'LeafletGeoportalIsocurveModel'
                };
              }
            }

            export class LeafletGeoportalIsocurveView extends control.LeafletControlView {
              initialize(parameters) {
                super.initialize(parameters);
                this.map_view = this.options.map_view;
              }
              create_obj() {
                this.obj = L.geoportalControl.Isocurve({
                        collapsed : false,
                        methods : ["time", "distance"],
                        exclusions : {
                           toll : true,
                           bridge : false,
                           tunnel : true
                        },
                        graphs : ["Pieton", "Voiture"],
                        isocurveOptions : {},
                        autocompleteOptions : {}})
              }
            }




