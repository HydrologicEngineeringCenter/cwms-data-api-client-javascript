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
import org.openapitools.client.model.CatalogEntry;

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
 * Catalog
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-07-12T11:57:07.491-05:00[America/Chicago]")
public class Catalog {
  public static final String SERIALIZED_NAME_PAGE = "page";
  @SerializedName(SERIALIZED_NAME_PAGE)
  private String page;

  public static final String SERIALIZED_NAME_TOTAL = "total";
  @SerializedName(SERIALIZED_NAME_TOTAL)
  private Integer total;

  public static final String SERIALIZED_NAME_ENTRIES = "entries";
  @SerializedName(SERIALIZED_NAME_ENTRIES)
  private List<CatalogEntry> entries;

  public static final String SERIALIZED_NAME_NEXT_PAGE = "next-page";
  @SerializedName(SERIALIZED_NAME_NEXT_PAGE)
  private String nextPage;

  public static final String SERIALIZED_NAME_PAGE_SIZE = "page-size";
  @SerializedName(SERIALIZED_NAME_PAGE_SIZE)
  private Integer pageSize;

  public Catalog() {
  }

  
  public Catalog(
     String page, 
     Integer total, 
     String nextPage, 
     Integer pageSize
  ) {
    this();
    this.page = page;
    this.total = total;
    this.nextPage = nextPage;
    this.pageSize = pageSize;
  }

   /**
   * The cursor to the current page of data
   * @return page
  **/
  @javax.annotation.Nullable

  public String getPage() {
    return page;
  }




   /**
   * The total number of records retrieved; null or not present if not supported or unknown
   * @return total
  **/
  @javax.annotation.Nullable

  public Integer getTotal() {
    return total;
  }




  public Catalog entries(List<CatalogEntry> entries) {
    
    this.entries = entries;
    return this;
  }

  public Catalog addEntriesItem(CatalogEntry entriesItem) {
    if (this.entries == null) {
      this.entries = new ArrayList<>();
    }
    this.entries.add(entriesItem);
    return this;
  }

   /**
   * Get entries
   * @return entries
  **/
  @javax.annotation.Nullable

  public List<CatalogEntry> getEntries() {
    return entries;
  }


  public void setEntries(List<CatalogEntry> entries) {
    this.entries = entries;
  }


   /**
   * The cursor to the next page of data; null if there is no more data
   * @return nextPage
  **/
  @javax.annotation.Nullable

  public String getNextPage() {
    return nextPage;
  }




   /**
   * The number of records fetched per-page; this may be larger than the number of records actually retrieved
   * @return pageSize
  **/
  @javax.annotation.Nullable

  public Integer getPageSize() {
    return pageSize;
  }





  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Catalog catalog = (Catalog) o;
    return Objects.equals(this.page, catalog.page) &&
        Objects.equals(this.total, catalog.total) &&
        Objects.equals(this.entries, catalog.entries) &&
        Objects.equals(this.nextPage, catalog.nextPage) &&
        Objects.equals(this.pageSize, catalog.pageSize);
  }

  @Override
  public int hashCode() {
    return Objects.hash(page, total, entries, nextPage, pageSize);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Catalog {\n");
    sb.append("    page: ").append(toIndentedString(page)).append("\n");
    sb.append("    total: ").append(toIndentedString(total)).append("\n");
    sb.append("    entries: ").append(toIndentedString(entries)).append("\n");
    sb.append("    nextPage: ").append(toIndentedString(nextPage)).append("\n");
    sb.append("    pageSize: ").append(toIndentedString(pageSize)).append("\n");
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
    openapiFields.add("page");
    openapiFields.add("total");
    openapiFields.add("entries");
    openapiFields.add("next-page");
    openapiFields.add("page-size");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to Catalog
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!Catalog.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in Catalog is not found in the empty JSON string", Catalog.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!Catalog.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `Catalog` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("page") != null && !jsonObj.get("page").isJsonNull()) && !jsonObj.get("page").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `page` to be a primitive type in the JSON string but got `%s`", jsonObj.get("page").toString()));
      }
      if (jsonObj.get("entries") != null && !jsonObj.get("entries").isJsonNull()) {
        JsonArray jsonArrayentries = jsonObj.getAsJsonArray("entries");
        if (jsonArrayentries != null) {
          // ensure the json data is an array
          if (!jsonObj.get("entries").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `entries` to be an array in the JSON string but got `%s`", jsonObj.get("entries").toString()));
          }

          // validate the optional field `entries` (array)
          for (int i = 0; i < jsonArrayentries.size(); i++) {
            CatalogEntry.validateJsonObject(jsonArrayentries.get(i).getAsJsonObject());
          };
        }
      }
      if ((jsonObj.get("next-page") != null && !jsonObj.get("next-page").isJsonNull()) && !jsonObj.get("next-page").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `next-page` to be a primitive type in the JSON string but got `%s`", jsonObj.get("next-page").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!Catalog.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'Catalog' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<Catalog> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(Catalog.class));

       return (TypeAdapter<T>) new TypeAdapter<Catalog>() {
           @Override
           public void write(JsonWriter out, Catalog value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public Catalog read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of Catalog given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of Catalog
  * @throws IOException if the JSON string is invalid with respect to Catalog
  */
  public static Catalog fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, Catalog.class);
  }

 /**
  * Convert an instance of Catalog to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

