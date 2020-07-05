import { LightningElement, track, api, wire } from "lwc";

// imports
export default class BoatTile extends LightningElement {
    @api
    boat;
    @api
    selectedBoatId;
    
    // Getter for dynamically setting the background image for the picture
    get backgroundStyle() { 
        return `background-image:url(${this.boat.Picture__c})`;
    }
    
    // Getter for dynamically setting the tile class based on whether the
    // current boat is selected
    get tileClass() { 
        const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
        const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';
        if(this.selectedBoatId == this.boat.Id){
            return TILE_WRAPPER_SELECTED_CLASS;
        }
        return TILE_WRAPPER_UNSELECTED_CLASS;
    }
    
    // Fires event with the Id of the boat that has been selected.
    selectBoat(event) { 
        this.dispatchEvent(new CustomEvent('boatselect', {detail:{boatId: this.boat.Id}}));
    }
  }