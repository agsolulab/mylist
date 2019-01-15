$("#btnDone").hide();
	var taskList = [];
	getTaskList();

	function getTaskList(){
		var _taskList = localStorage.getItem("MyTaskList");
		if(_taskList != null || taskList != ""){
			taskList = JSON.parse(_taskList);
		}

		$("#listNames").empty();
		for(var i=0; i<taskList.length; i++){
			var html = "<li data-index='"+taskList[i]["index"]+"'>" + 
				"<span>"+
				((taskList[i]["isDone"]) ? "<label class='label label-success'>Done</label>" : "<label class='label label-warning'>Pending</label>")+
				"<a href='javascript:;' onclick='modifyTask("+taskList[i]["index"]+")'>Modify</a>"+
				"<a href='javascript:;'>Remove</a>"+
				"</span>"+
				"<h4>" + taskList[i]["name"] + "</h4> <div class='text-muted'>" + taskList[i]["category"] + "</div>" + 
				"</li>";
			$("#listNames").append(html);
		}
	}