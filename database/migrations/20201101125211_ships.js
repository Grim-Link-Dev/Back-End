exports.up = async function (knex) {
    await knex.schema.createTable("ships", (tbl) => {
      tbl.increments("ship_id").primary();
      tbl.text("chassis_id");
      tbl.text("name");
    }).createTable("ship_specs1", (tbl) => {
      tbl
        .text("id")
        .primary()
        .notNullable()
        .unsigned()
        .references("ship_id")
        .inTable("ships")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("afterburner_speed");
      tbl.text("beam");
      tbl.text("cargocapacity");
      tbl.text("height");
      tbl.text("length");
      tbl.text("manufacturer_id");
      tbl.text("mass");
      tbl.text("max_crew");
      tbl.text("min_crew");
      tbl.text("pitch_max");
      tbl.text("production_note");
      tbl.text("production_status");
      tbl.text("roll_max");
      tbl.text("scm_speed");
      tbl.text("size");
      tbl.text("time_modified");
      tbl.text("type");
      tbl.text("xaxis_acceleration");
      tbl.text("yaw_max");
      tbl.text("yaxis_acceleration");
      tbl.text("zaxis_acceleration");
      tbl.text("description");
      tbl.text("url");
      }).createTable("ship_specs2", (tbl) => {
        tbl
          .primary()
          .text("id")
          .notNullable()
          .unsigned()
          .references("ship_id")
          .inTable("ships")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl.text("afterburner_speed");
        tbl.text("beam");
        tbl.text("cargocapacity");
        tbl.text("height");
        tbl.text("length");
        tbl.text("manufacturer_id");
        tbl.text("mass");
        tbl.text("max_crew");
        tbl.text("min_crew");
        tbl.text("pitch_max");
        tbl.text("production_note");
        tbl.text("production_status");
        tbl.text("roll_max");
        tbl.text("scm_speed");
        tbl.text("size");
        tbl.text("time_modified");
        tbl.text("type");
        tbl.text("xaxis_acceleration");
        tbl.text("yaw_max");
        tbl.text("yaxis_acceleration");
        tbl.text("zaxis_acceleration");
        tbl.text("description");
        tbl.text("url");
        }).createTable("ship_specs3", (tbl) => {
          tbl
            .primary()
            .text("id")
            .notNullable()
            .unsigned()
            .references("ship_id")
            .inTable("ships")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
          tbl.text("afterburner_speed");
          tbl.text("beam");
          tbl.text("cargocapacity");
          tbl.text("height");
          tbl.text("length");
          tbl.text("manufacturer_id");
          tbl.text("mass");
          tbl.text("max_crew");
          tbl.text("min_crew");
          tbl.text("pitch_max");
          tbl.text("production_note");
          tbl.text("production_status");
          tbl.text("roll_max");
          tbl.text("scm_speed");
          tbl.text("size");
          tbl.text("time_modified");
          tbl.text("type");
          tbl.text("xaxis_acceleration");
          tbl.text("yaw_max");
          tbl.text("yaxis_acceleration");
          tbl.text("zaxis_acceleration");
          tbl.text("description");
          tbl.text("url");
          }).createTable("ship_specs4", (tbl) => {
            tbl
              .primary()
              .text("id")
              .notNullable()
              .unsigned()
              .references("ship_id")
              .inTable("ships")
              .onUpdate("CASCADE")
              .onDelete("CASCADE");
            tbl.text("afterburner_speed");
            tbl.text("beam");
            tbl.text("cargocapacity");
            tbl.text("height");
            tbl.text("length");
            tbl.text("manufacturer_id");
            tbl.text("mass");
            tbl.text("max_crew");
            tbl.text("min_crew");
            tbl.text("pitch_max");
            tbl.text("production_note");
            tbl.text("production_status");
            tbl.text("roll_max");
            tbl.text("scm_speed");
            tbl.text("size");
            tbl.text("time_modified");
            tbl.text("type");
            tbl.text("xaxis_acceleration");
            tbl.text("yaw_max");
            tbl.text("yaxis_acceleration");
            tbl.text("zaxis_acceleration");
            tbl.text("description");
            tbl.text("url");
            }).createTable("ship_specs5", (tbl) => {
              tbl
                .primary()
                .text("id")
                .notNullable()
                .unsigned()
                .references("ship_id")
                .inTable("ships")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
              tbl.text("afterburner_speed");
              tbl.text("beam");
              tbl.text("cargocapacity");
              tbl.text("height");
              tbl.text("length");
              tbl.text("manufacturer_id");
              tbl.text("mass");
              tbl.text("max_crew");
              tbl.text("min_crew");
              tbl.text("pitch_max");
              tbl.text("production_note");
              tbl.text("production_status");
              tbl.text("roll_max");
              tbl.text("scm_speed");
              tbl.text("size");
              tbl.text("time_modified");
              tbl.text("type");
              tbl.text("xaxis_acceleration");
              tbl.text("yaw_max");
              tbl.text("yaxis_acceleration");
              tbl.text("zaxis_acceleration");
              tbl.text("description");
              tbl.text("url");
              })

 };
  exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("ship_specs5");
    await knex.schema.dropTableIfExists("ship_specs4");
    await knex.schema.dropTableIfExists("ship_specs3");
    await knex.schema.dropTableIfExists("ship_specs2");
    await knex.schema.dropTableIfExists("ship_specs1");
    await knex.schema.dropTableIfExists("ships");
  }; // make sure to add these "backwards/reverse"


/*
      tbl.increments("id").unsigned().primary().unique();
      tbl.text("afterburner_speed");
      tbl.text("beam");
      tbl.text("cargocapacity")
      tbl.text("chassis_id");
      tbl.text("height");
      tbl.text("length");
      tbl.text("manufacturer_id");
      tbl.text("mass");
      tbl.text("max_crew");
      tbl.text("min_crew");
      tbl.text("pitch_max");
      tbl.text("production_note")
      tbl.text("production_status");
      tbl.text("roll_max");
      tbl.text("scm_speed");
      tbl.text("size");
      tbl.text("time_modified");
      tbl.text("type");
      tbl.text("xaxis_acceleration");
      tbl.text("yaw_max");
      tbl.text("yaxis_acceleration");
      tbl.text("zaxis_acceleration");
      tbl.text("description");
      tbl.text("name");
      tbl.text("url");
      tbl.text("compiled");
      tbl.text("");
       */