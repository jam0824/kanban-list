KanbanList.namespace('draggableTask');
KanbanList.draggableTask = (function(){
  var autoLoadingTimer = KanbanList.autoLoadingTimer;
  var handlers = {};

  var option = {
    start  : function(event, ui){
    },
    stop   : function(event, ui){
    },

    receive: function(event, ui){
      if (handlers.receive == undefined){ return; }
      var update_id = ui.item.attr("id").slice(3);
      var from_id = ui.sender.attr("id");
      var to_id = $(this).get(0).id;

      handlers.receive( update_id, from_id, to_id);
    },
    update: function(event, ui){
      handlers.update_order($(this).get(0).id,
                            $(this).sortable("serialize"));
    },

    connectWith: 'ul',
    forcePlaceholderSize: true,
    axis: "y",
    cancel: ".cancel",
    scroll: true,
    tolerance: 'pointer',
    handle: ".task-body",
    revert: false
  };

  function setHandlers(handlers_hash){
    handlers = handlers_hash;
  }

  // ドラッグ＆ドロップ可能にする
  function startAll(){
    $("#doing, #waiting, #todo_m, #todo_l, #todo_h" ).sortable(option).enableSelection();
  }

  function startByElem(elem){
    elem.sortable(option);
  }

  function stopByElem(elem){
    elem.sortable('destroy');
  }

  return {
    setHandlers: setHandlers,
    startAll:    startAll,
    startByElem: startByElem,
    stopByElem:  stopByElem
  }
}());
