class CreateWaters < ActiveRecord::Migration[6.0]
  def change
    create_table :waters do |t|
      t.integer :amount
      t.integer :user_id
      t.string :date 

      t.timestamps
    end
  end
end
