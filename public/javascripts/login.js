$("input[type='submit']").click(function(){
	//console.log("test");
	//location.href='/index';
	return false;
});
$('#register').click(function(){
	location.href='/register';
});
/*<% for(var i = 0; i < 37; i++) {%>
            <tr>
                <td><%= list[i].name %></td>
                <td><%= list[i].age %></td>
                <td><%= list[i].sex %></td>
                <td><%= list[i].tel %></td>
                <td><%= list[i].addr %></td>
                <td><%= list[i].addr %></td>
                <td>
                    <a href="">删除</a>
                </td>
            </tr>
<%} %>*/

