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
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.AssignedTimeSeries;
import org.openapitools.client.model.TimeSeriesCategory;

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
 * A representation of a timeseries group
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-07-12T11:57:07.491-05:00[America/Chicago]")
public class TimeSeriesGroup {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_TIME_SERIES_CATEGORY = "timeSeriesCategory";
  @SerializedName(SERIALIZED_NAME_TIME_SERIES_CATEGORY)
  private TimeSeriesCategory timeSeriesCategory;

  public static final String SERIALIZED_NAME_OFFICE_ID = "officeId";
  @SerializedName(SERIALIZED_NAME_OFFICE_ID)
  private String officeId;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_SHARED_ALIAS_ID = "sharedAliasId";
  @SerializedName(SERIALIZED_NAME_SHARED_ALIAS_ID)
  private String sharedAliasId;

  public static final String SERIALIZED_NAME_SHARED_REF_TS_ID = "sharedRefTsId";
  @SerializedName(SERIALIZED_NAME_SHARED_REF_TS_ID)
  private String sharedRefTsId;

  public static final String SERIALIZED_NAME_ASSIGNED_TIME_SERIES = "assignedTimeSeries";
  @SerializedName(SERIALIZED_NAME_ASSIGNED_TIME_SERIES)
  private List<AssignedTimeSeries> assignedTimeSeries;

  public TimeSeriesGroup() {
  }

  public TimeSeriesGroup id(String id) {
    
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nullable

  public String getId() {
    return id;
  }


  public void setId(String id) {
    this.id = id;
  }


  public TimeSeriesGroup timeSeriesCategory(TimeSeriesCategory timeSeriesCategory) {
    
    this.timeSeriesCategory = timeSeriesCategory;
    return this;
  }

   /**
   * Get timeSeriesCategory
   * @return timeSeriesCategory
  **/
  @javax.annotation.Nullable

  public TimeSeriesCategory getTimeSeriesCategory() {
    return timeSeriesCategory;
  }


  public void setTimeSeriesCategory(TimeSeriesCategory timeSeriesCategory) {
    this.timeSeriesCategory = timeSeriesCategory;
  }


  public TimeSeriesGroup officeId(String officeId) {
    
    this.officeId = officeId;
    return this;
  }

   /**
   * Get officeId
   * @return officeId
  **/
  @javax.annotation.Nullable

  public String getOfficeId() {
    return officeId;
  }


  public void setOfficeId(String officeId) {
    this.officeId = officeId;
  }


  public TimeSeriesGroup description(String description) {
    
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @javax.annotation.Nullable

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public TimeSeriesGroup sharedAliasId(String sharedAliasId) {
    
    this.sharedAliasId = sharedAliasId;
    return this;
  }

   /**
   * Get sharedAliasId
   * @return sharedAliasId
  **/
  @javax.annotation.Nullable

  public String getSharedAliasId() {
    return sharedAliasId;
  }


  public void setSharedAliasId(String sharedAliasId) {
    this.sharedAliasId = sharedAliasId;
  }


  public TimeSeriesGroup sharedRefTsId(String sharedRefTsId) {
    
    this.sharedRefTsId = sharedRefTsId;
    return this;
  }

   /**
   * Get sharedRefTsId
   * @return sharedRefTsId
  **/
  @javax.annotation.Nullable

  public String getSharedRefTsId() {
    return sharedRefTsId;
  }


  public void setSharedRefTsId(String sharedRefTsId) {
    this.sharedRefTsId = sharedRefTsId;
  }


  public TimeSeriesGroup assignedTimeSeries(List<AssignedTimeSeries> assignedTimeSeries) {
    
    this.assignedTimeSeries = assignedTimeSeries;
    return this;
  }

  public TimeSeriesGroup addAssignedTimeSeriesItem(AssignedTimeSeries assignedTimeSeriesItem) {
    if (this.assignedTimeSeries == null) {
      this.assignedTimeSeries = new ArrayList<>();
    }
    this.assignedTimeSeries.add(assignedTimeSeriesItem);
    return this;
  }

   /**
   * Get assignedTimeSeries
   * @return assignedTimeSeries
  **/
  @javax.annotation.Nullable

  public List<AssignedTimeSeries> getAssignedTimeSeries() {
    return assignedTimeSeries;
  }


  public void setAssignedTimeSeries(List<AssignedTimeSeries> assignedTimeSeries) {
    this.assignedTimeSeries = assignedTimeSeries;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TimeSeriesGroup timeSeriesGroup = (TimeSeriesGroup) o;
    return Objects.equals(this.id, timeSeriesGroup.id) &&
        Objects.equals(this.timeSeriesCategory, timeSeriesGroup.timeSeriesCategory) &&
        Objects.equals(this.officeId, timeSeriesGroup.officeId) &&
        Objects.equals(this.description, timeSeriesGroup.description) &&
        Objects.equals(this.sharedAliasId, timeSeriesGroup.sharedAliasId) &&
        Objects.equals(this.sharedRefTsId, timeSeriesGroup.sharedRefTsId) &&
        Objects.equals(this.assignedTimeSeries, timeSeriesGroup.assignedTimeSeries);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, timeSeriesCategory, officeId, description, sharedAliasId, sharedRefTsId, assignedTimeSeries);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TimeSeriesGroup {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    timeSeriesCategory: ").append(toIndentedString(timeSeriesCategory)).append("\n");
    sb.append("    officeId: ").append(toIndentedString(officeId)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    sharedAliasId: ").append(toIndentedString(sharedAliasId)).append("\n");
    sb.append("    sharedRefTsId: ").append(toIndentedString(sharedRefTsId)).append("\n");
    sb.append("    assignedTimeSeries: ").append(toIndentedString(assignedTimeSeries)).append("\n");
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
    openapiFields.add("id");
    openapiFields.add("timeSeriesCategory");
    openapiFields.add("officeId");
    openapiFields.add("description");
    openapiFields.add("sharedAliasId");
    openapiFields.add("sharedRefTsId");
    openapiFields.add("assignedTimeSeries");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to TimeSeriesGroup
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!TimeSeriesGroup.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in TimeSeriesGroup is not found in the empty JSON string", TimeSeriesGroup.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!TimeSeriesGroup.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `TimeSeriesGroup` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("id") != null && !jsonObj.get("id").isJsonNull()) && !jsonObj.get("id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("id").toString()));
      }
      // validate the optional field `timeSeriesCategory`
      if (jsonObj.get("timeSeriesCategory") != null && !jsonObj.get("timeSeriesCategory").isJsonNull()) {
        TimeSeriesCategory.validateJsonObject(jsonObj.getAsJsonObject("timeSeriesCategory"));
      }
      if ((jsonObj.get("officeId") != null && !jsonObj.get("officeId").isJsonNull()) && !jsonObj.get("officeId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `officeId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("officeId").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      if ((jsonObj.get("sharedAliasId") != null && !jsonObj.get("sharedAliasId").isJsonNull()) && !jsonObj.get("sharedAliasId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `sharedAliasId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("sharedAliasId").toString()));
      }
      if ((jsonObj.get("sharedRefTsId") != null && !jsonObj.get("sharedRefTsId").isJsonNull()) && !jsonObj.get("sharedRefTsId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `sharedRefTsId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("sharedRefTsId").toString()));
      }
      if (jsonObj.get("assignedTimeSeries") != null && !jsonObj.get("assignedTimeSeries").isJsonNull()) {
        JsonArray jsonArrayassignedTimeSeries = jsonObj.getAsJsonArray("assignedTimeSeries");
        if (jsonArrayassignedTimeSeries != null) {
          // ensure the json data is an array
          if (!jsonObj.get("assignedTimeSeries").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `assignedTimeSeries` to be an array in the JSON string but got `%s`", jsonObj.get("assignedTimeSeries").toString()));
          }

          // validate the optional field `assignedTimeSeries` (array)
          for (int i = 0; i < jsonArrayassignedTimeSeries.size(); i++) {
            AssignedTimeSeries.validateJsonObject(jsonArrayassignedTimeSeries.get(i).getAsJsonObject());
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!TimeSeriesGroup.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'TimeSeriesGroup' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<TimeSeriesGroup> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(TimeSeriesGroup.class));

       return (TypeAdapter<T>) new TypeAdapter<TimeSeriesGroup>() {
           @Override
           public void write(JsonWriter out, TimeSeriesGroup value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public TimeSeriesGroup read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of TimeSeriesGroup given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of TimeSeriesGroup
  * @throws IOException if the JSON string is invalid with respect to TimeSeriesGroup
  */
  public static TimeSeriesGroup fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, TimeSeriesGroup.class);
  }

 /**
  * Convert an instance of TimeSeriesGroup to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

