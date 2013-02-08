class DashboardController < ApplicationController
  def index
    @user = current_user
    @add_tasks  = @user.tasks.newest_add
    @edit_tasks = @user.tasks.newest_edit
    @done_tasks = @user.tasks.newest_done
    @doing_tasks = @user.tasks.by_status(:doing).limit(10)
    @today_tasks = @user.tasks.today_done
#    @today_tasks = @user.tasks.today_touch
    @books = books_count_info_array
    @task_counts = all_count_info
    @month_done_list = current_tasks.done_month_list.sort{|a,b| a[:date] <=> b[:date] }
  end
end
