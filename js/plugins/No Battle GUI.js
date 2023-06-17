// Made by request.
// Place file inside /js/plugins
// Remember to save after adding plugins or changing parameters.
//=============================================================================
// No Battle GUI
//=============================================================================
/*:
 * Version: 2015-11-21-1931
 * 
 * CHANGE LOG:
 * 2015-11-21-1931: Released.
 * 
 * 
 * @plugindesc Ver.2015-11-21-1931. No Battle GUI
 * @author https://ellyeblog.wordpress.com/ || http://steamcommunity.com/id/Ellye
 * 
 * 
 * @help
 * Meant for a game with only auto-battlers.
 * 
 */

(function()
{
    Scene_Battle.prototype.startPartyCommandSelection = function() {
        this.refreshStatus();
        this.commandFight();
    };
    
    Window_BattleStatus.prototype.open = function() {
        return;
    };
    
})();