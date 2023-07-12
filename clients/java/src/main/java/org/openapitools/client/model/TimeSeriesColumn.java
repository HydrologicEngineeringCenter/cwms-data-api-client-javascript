/*
 * CWMS Radar
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 2.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * TimeSeriesColumn
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-07-12T11:57:07.491-05:00[America/Chicago]")
public class TimeSeriesColumn {
  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_ORDINAL = "ordinal";
  @SerializedName(SERIALIZED_NAME_ORDINAL)
  private Integer ordinal;

  public static final String SERIALIZED_NAME_DATATYPE = "datatype";
  @SerializedName(SERIALIZED_NAME_DATATYPE)
  private String datatype;

  public TimeSeriesColumn() {
  }

  public TimeSeriesColumn name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public TimeSeriesColumn ordinal(Integer ordinal) {
    
    this.ordinal = ordinal;
    return this;
  }

   /**
   * Get ordinal
   * @return ordinal
  **/
  @javax.annotation.Nullable

  public Integer getOrdinal() {
    return ordinal;
  }


  public void setOrdinal(Integer ordinal) {
    this.ordinal = ordinal;
  }


  public TimeSeriesColumn datatype(String datatype) {
    
    this.datatype = datatype;
    return this;
  }

   /**
   * Get datatype
   * @return datatype
  **/
  @javax.annotation.Nullable

  public String getDatatype() {
    return datatype;
  }


  public void setDatatype(String datatype) {
    this.datatype = datatype;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TimeSeriesColumn timeSeriesColumn = (TimeSeriesColumn) o;
    return Objects.equals(this.name, timeSeriesColumn.name) &&
        Objects.equals(this.ordinal, timeSeriesColumn.ordinal) &&
        Objects.equals(this.datatype, timeSeriesColumn.datatype);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, ordinal, datatype);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TimeSeriesColumn {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    ordinal: ").append(toIndentedString(ordinal)).append("\n");
    sb.append("    datatype: ").append(toIndentedString(datatype)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("name");
    openapiFields.add("ordinal");
    openapiFields.add("datatype");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to TimeSeriesColumn
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!TimeSeriesColumn.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in TimeSeriesColumn is not found in the empty JSON string", TimeSeriesColumn.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!TimeSeriesColumn.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `TimeSeriesColumn` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("datatype") != null && !jsonObj.get("datatype").isJsonNull()) && !jsonObj.get("datatype").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `datatype` to be a primitive type in the JSON string but got `%s`", jsonObj.get("datatype").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!TimeSeriesColumn.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'TimeSeriesColumn' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<TimeSeriesColumn> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(TimeSeriesColumn.class));

       return (TypeAdapter<T>) new TypeAdapter<TimeSeriesColumn>() {
           @Override
           public void write(JsonWriter out, TimeSeriesColumn value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public TimeSeriesColumn read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of TimeSeriesColumn given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of TimeSeriesColumn
  * @throws IOException if the JSON string is invalid with respect to TimeSeriesColumn
  */
  public static TimeSeriesColumn fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, TimeSeriesColumn.class);
  }

 /**
  * Convert an instance of TimeSeriesColumn to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

