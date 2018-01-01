import Tile from './Tile.js';

class Row {
    constructor(tiles) {
        this.tiles = tiles.map(function (tile) {
            return new Tile(tile);
        });
    }

    containsTile(x, y) {
        return this.findTile(x, y) != null;
    }

    findTile(x, y) {
        var tile;

        this.tiles.forEach(function (rowTile) {
            if (rowTile.x == x && rowTile.y == y) {
                tile = rowTile;
            }
        })

        return tile;
    }
}
export default Row;